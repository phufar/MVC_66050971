class WhiteModel extends TypeModel{
    TypeCalculate(){
        const Type = this.TypeNum;
        const Year = this.Year;
        const Month = this.Month;
        let result = 120 - ((Year*12) + Month); //calculate
        if(Type != 1){
            return 0;
        }
        return result;
    }
}
//For White Cow