class CowView {
    
    //display Error from User
    displayError(message) {
        document.getElementById("Result").innerText = "Result : " + message
    }

    //Alert Result
    displayAlert(White, Brown, Pink) {
        let Total = White + Brown + Pink;
        alert("Freah Mil : " + White + "Liter(s)\n" + "Chocolate Milk : " +
            Brown + "Liter(s)\n" + "Strawberry Milk : " + Pink + "Liter(s)\n"
            + "All Mil Amount : " + Total + "Liter(s)");
    }

    clearInputs() {
        // Clear text inputs
        document.getElementById('CowCode').value = '';
        document.getElementById('Year').value = '';
        document.getElementById('Month').value = '';
    
        // Clear select element
        document.getElementById('Type').selectedIndex = 0; // Resets to the first option
    }
    
}