class CowController {
    //constructor
    constructor(Model, View) {
        this.Model = Model;
        this.View = View;
        this.init();
    }

    init() {
        //To init give submit button a listener and Call HandleCow
        document.getElementById("Submit").addEventListener("click", () => {
            this.HandleCow();
        });
    }

    HandleCow() {
        try {
            //Get Data From View
            const CowCode = document.getElementById("CowCode").value;
            const Year = Number(document.getElementById("Year").value);
            const Month = Number(document.getElementById("Month").value);
            const TypeNum = document.getElementById("Type").value;

            //from value to String
            const Type = this.getColorName(TypeNum)

            //Create Cow Object
            let inputCow = new Cow(CowCode, Year, Month, Type, TypeNum);

            //Check that Cow in Database
            this.checkCowInDatabase(inputCow.getCowCode());

            //Calculate Each Type of Milk
            const White = (new WhiteModel(inputCow.getCowTypeNum(), inputCow.getCowYear(), inputCow.getCowMonth()).TypeCalculate());
            const Brown = (new BrownModel(inputCow.getCowTypeNum(), inputCow.getCowYear(), inputCow.getCowMonth()).TypeCalculate());
            const Pink = (new PinkModel(inputCow.getCowTypeNum(), inputCow.getCowYear(), inputCow.getCowMonth()).TypeCalculate());
            //show on Alert
            this.View.displayAlert(White, Brown, Pink);
        
        } catch (error) {
            //clear inputs
            this.View.clearInputs();
            //show error
            this.View.displayError(error.message);
        }
    }

    //This function call IsCowInDataBase in Model
    checkCowInDatabase(CowCode) {
        if (!this.Model.isCowInDatabase(CowCode)) throw new Error("Cow not in Database!!!");
    }

    //Number to String    
    getColorName(value) {
        switch (value) {
            case 1:
                return 'White';
            case 2:
                return 'Brown';
            case 3:
                return 'Pink';
            default:
                return 'Unknown'; // Return a default value if no match is found
        }
    }

}
document.addEventListener("DOMContentLoaded", function () {
    const View = new CowView();
    const Model = new CowModel();
    const Controller = new CowController(Model, View);
});