service demo_srv {

    function textFunc(Name : String, Email : String, Age : Integer)returns many String;
    function textFileCall(Name : String)returns many String;
    function downloadJson(Name : String)returns Binary;
    function gitFunc(Name : String)returns many String;

}