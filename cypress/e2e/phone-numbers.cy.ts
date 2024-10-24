describe("phone numbers spec", () => {
  it("should be able to visit the site and targeting to phone numbers menu", () => {
    cy.visit("/signin");
    cy.getByDataId("title").contains(/login/i);
    cy.getByDataId("input-email").type("{selectall}{backspace}");
    cy.getByDataId("input-email").type("hilman.king@gmail.com");
    cy.getByDataId("btn-submit").contains(/login/i).click();
    cy.getByDataId("nav-Data Aset Digital")
      .contains(/Data Aset Digital/i)
      .click();
    cy.getByDataId("nav-Input Aset Digital")
      .contains(/Input Aset Digital/i)
      .click();
    cy.getByDataId("nav-Nomor Telepon")
      .contains(/Nomor Telepon/i)
      .click();
    cy.getByDataId("input-search")
      .should("have.attr", "placeholder", "Search all data...")
      .type("AHMAD YANI SINGARAJA");
    cy.getByDataId("input-search").type("{selectall}{backspace}");
    cy.getByDataId("input-search")
      .should("have.attr", "placeholder", "Search all data...")
      .type("Jalan Raya Cibiru No.613");
    cy.getByDataId("input-search").type("{selectall}{backspace}");
    cy.getByDataId("row-MTC 9").rightclick();
    cy.getByDataId("actions").contains(/actions/i);
    cy.getByDataId("act-view").click();
    cy.getByDataId("btn-create").click();
    cy.getByDataId("title-Manage Data Handphone").contains(
      /Manage Data Handphone/i
    );
    cy.getByDataId("btn-close").click();
    cy.getByDataId("row-Ibu Sri").rightclick();
    cy.getByDataId("actions").contains(/actions/i);
    cy.getByDataId("act-edit").click();
    cy.getByDataId("title-Edit Phone").contains(/Edit Phone/i);
    cy.getByDataId("btn-close").click();
  });
});
