//Cow Object
class Cow{
    constructor(CowCode, Year, Month, Type, TypeNum){
        if (!this.LegitCheck(CowCode, Year, Month, TypeNum)) throw new Error("That 's Cow not Real");
        this.CowCode = CowCode;
        this.Year = Year;
        this.Month = Month;
        this.Type = Type;
        this.TypeNum = TypeNum;

    }

    LegitCheck(CowCode, Year, Month, TypeNum){
        if(!(/^[1-9]\d{7}$/.test(CowCode) && CowCode.length === 8)){ //To check that not start with 0 and have exactly 8 digits
            return false;
        }
        if(Year <  0 || Month < 1 || Month > 12){ //To Check that year not negative and Month between 1 and 12
            return false;
        }
        if(TypeNum < 1 || TypeNum > 3){ //Check That Cows match the Type
            return false;
        }

        return true;
    }

    //Getter
    getCowCode(){
        return this.CowCode;
    }

    getCowYear(){
        return this.Year;
    }

    getCowMonth(){
        return this.Month;
    }

    getCowType(){
        return this.Type;
    }
    
    getCowTypeNum(){
        return this.TypeNum;
    }

}