import { debounce, debounceTime, Subject, throttle } from "rxjs";

function dynamicRun(input: any, body: any) {
  let functionBody = `
        let context = ${input};
        console.log('context from function',context);
        ${body}
    `;
  console.log("functionbody", functionBody);
  let dynaFunction = Function(functionBody);
  console.log("dynafunction", dynaFunction);
  let fnResult = dynaFunction();
  return fnResult;
}

class EditorService {
  private source: string = "";
  private body: string = "";

  public result$ = new Subject();
  private triggerSubject = new Subject<{ source: string; body: string }>();

  constructor() {
    this.triggerSubject.pipe(debounceTime(250)).subscribe((o) => {
      this.evaluateResult(o.source, o.body);
    });
  }

  setSource(value: string) {
    this.source = value;
    this.triggerSubject.next({
      source: this.source,
      body: this.body,
    });
  }

  private evaluateResult(source: string, body: string) {
    try {
      let result = dynamicRun(source, body);
      console.log("result", result);
      this.result$.next(JSON.stringify(result, null, "\t"));
    } catch (e) {
      console.error(e);
    }
  }

  setBody(value: any) {
    this.body = value;
    this.triggerSubject.next({
      source: this.source,
      body: this.body,
    });
  }
}

const editorService = new EditorService();

export default editorService;
