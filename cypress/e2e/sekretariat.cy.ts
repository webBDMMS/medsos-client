describe("sekretariat spec", () => {
  it("should be able to visit the site and targeting to sekretariat menu", () => {
    cy.visit("/signin");
    cy.getByDataId("title").contains(/login/i);
    cy.getByDataId("input-email").type("{selectall}{backspace}");
    cy.getByDataId("input-email").type("hilman.king@gmail.com");
    cy.getByDataId("btn-submit").contains(/login/i).click();
    cy.getByDataId("nav-Gedung")
      .contains(/gedung/i)
      .click();
    cy.getByDataId("input-search")
      .should("have.attr", "placeholder", "Search all data...")
      .type("AHMAD YANI SINGARAJA");
    cy.getByDataId("input-search").type("{selectall}{backspace}");
    cy.getByDataId("input-search")
      .should("have.attr", "placeholder", "Search all data...")
      .type("Jalan Raya Cibiru No.613");
    cy.getByDataId("input-search").type("{selectall}{backspace}");
    cy.getByDataId("btn-trigger").click();
    cy.get('[data-value="MTC 9"]').click(); // You might keep this as is if there is no data-id
    cy.get("body").click(0, 0); // You might keep this as is if you need to click outside
    cy.getByDataId("btn-reset").click();
    cy.getByDataId("row-SOEPOMO 4").dblclick();
    cy.getByDataId("title-Manage Sekretariat").contains(/manage sekretariat/i);
    cy.getByDataId("btn-close").click();
  });
});
