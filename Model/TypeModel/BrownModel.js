class BrownModel extends TypeModel{
    TypeCalculate(){
        const Type = this.TypeNum;
        const Year = this.Year;
        const Month = this.Month;
        let result = 40 - Year; //calculate
        if(Type != 2){
            return 0;
        }
        return result;
    }
}