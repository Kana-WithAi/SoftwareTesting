describe('Checkout Process Test', () => {
  beforeEach(() => {
    // Đăng nhập trước mỗi bài test
    cy.visit('https://www.saucedemo.com');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Should complete the checkout information flow', () => {
    // 1. Thêm sản phẩm vào giỏ
    cy.get('.inventory_item').first().find('.btn_inventory').click();

    // 2. Đi đến giỏ hàng
    cy.get('.shopping_cart_link').click();

    // 3. Nhấn nút Checkout
    cy.get('#checkout').click();

    // 4. Điền thông tin thanh toán
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');

    // 5. Nhấn Continue
    cy.get('#continue').click();

    // 6. Xác minh chuyển hướng đến bước 2 (Checkout: Overview)
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.title').should('contain', 'Checkout: Overview');
  });
});