import {Subject} from "rxjs";

function dynamicRun(input: any, body: any) {

    let functionBody = `
        let context = ${input};
        console.log('context from function',context);
        ${body}
    `;
    console.log("functionbody",functionBody);
    let dynaFunction = Function(functionBody);
    console.log("dynafunction",dynaFunction);
    let fnResult =  dynaFunction();
    return fnResult;
}

class EditorService {
    private source: string = "";

    public result$ = new Subject();
    private body: any;

    setSource(value: string) {
        try{
            this.source = value;
            let result = dynamicRun(value, this.body);
            console.log("result",result);
            this.result$.next(JSON.stringify(result,null,"\t"));
        }catch (e){
            console.error(e);
        }

    }


    setBody(value: any) {
        this.body = value;
    }
};

const editorService = new EditorService();

export default editorService;