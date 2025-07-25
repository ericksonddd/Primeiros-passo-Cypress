class MenuPage{
    selectorsList() {
        const selectors = {

            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]'

        }
        return selectors
    }
    accessMyinfo(){
        cy.get(this.selectorsList().myInfoButton).click()
    }
    accessorPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

}

export default MenuPage