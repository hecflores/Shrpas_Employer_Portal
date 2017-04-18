import $ from 'jquery';
<<<<<<< HEAD
import {EventHandler,MyEvent} from '../EventHandler.jsx';
import GenericAPI from '../GenericAPI.jsx';

/**
 * @class APIHook
 */
=======
import EventHandler from '../EventHandler.jsx';

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
class APIHook{



    _isLive;

    /**
     * @param int
     */
    id;

    /**
     * @param APIListener
     */
    listener;

    /**
     * @constructor
     * @param listener APIListener
     */
<<<<<<< HEAD
    constructor(listener,id){
        this.id=""+id;
=======
    constructor(listener){
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
        this.listener=listener;
        this._isLive=true;
    }

    /**
     *
     * @returns {int}
     */
    getID(){
        return this.id;
    }

    /**
     *
     * @returns {APIListener}
     */
    getListener(){
        return this.listener;
    }

    /**
     *
     * @returns {boolean}
     */
    isLive(){
        return this._isLive;
    }
<<<<<<< HEAD
    remove(){
        this.getListener().EventHandler().unbindAll(this.getID());
        this.close();
    }
    close(){
        this._isLive=false;
    }
    open(){
        this._isLive=true;
    }
=======

    close(){
        this._isLive=false;
    }

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
    trigger(eventName, data){

    }
    on(){
<<<<<<< HEAD
        let actualCallback;
        let $this = this;
        switch(arguments.length) {
=======
        switch(arguments.length){
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
            case 0:
                throw new Error("Expecting at least 2 arguments, recieved 0");
            case 1:
                throw new Error("Expecting at least 2 arguments, recieved 1");
<<<<<<< HEAD
            case 2:

                actualCallback = arguments[arguments.length - 1];

                /***********************************************************/
                if (typeof actualCallback != "function") {
=======
            default:
                let $this=this;
                let actualCallback=arguments[arguments.length-1];

                /***********************************************************/
                if(typeof actualCallback!="function"){
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
                    throw new Error("Expecting last argument to be a function, function was not found");
                }

                /***********************************************************/
<<<<<<< HEAD
                arguments[arguments.length - 1] = function (e)
                {
                    if (!$this.isLive()) {
=======
                arguments[arguments.length-1]=function(e)
                {
                    if(!$this.isLive()){
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
                        return;
                    }
                    actualCallback(e); //.data
                };

                /************************************************************/
                /* Build better argument list                               */
                /************************************************************/
<<<<<<< HEAD

                var newArguments = [];
                newArguments.push(this.getID());//Set a Sub Event allowing us to unbind this one specific hook later
                for (let index in arguments) {
                    newArguments.push(arguments[index]);

                    //We just want to parameters so exit if it reaches that
                    if (newArguments.length == arguments.length) {
=======
                let newArguments=[];
                for(let index in arguments){
                    newArguments.push(arguments[index]);

                    //We just want to parameters so exit if it reaches that
                    if(newArguments.length==arguments.length-1){
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
                        break
                    }
                }
                newArguments.push("updated");//What is triggered when the data is finished
<<<<<<< HEAD
                newArguments.push(arguments[arguments.length - 1]);

                /***********************************************************/
                this.getListener().on.apply(this.getListener(), newArguments);
                break;
            default:
                actualCallback = arguments[arguments.length - 1];

                /***********************************************************/
                if (typeof actualCallback != "function") {
                    throw new Error("Expecting last argument to be a function, function was not found");
                }

                /***********************************************************/
                arguments[arguments.length - 1] = function (e) {
                    if (!$this.isLive()) {
                        return;
                    }
                    actualCallback(e); //.data
                };

                /************************************************************/
                /* Build better argument list                               */
                /************************************************************/
                var newArguments = [];
                newArguments.push(this.getID());//Set a Sub Event allowing us to unbind this one specific hook later
                for (let index in arguments) {
                    newArguments.push(arguments[index]);

                    //We just want to parameters so exit if it reaches that
                    if (newArguments.length == arguments.length) {
                        break
                    }
                }
                newArguments.push(arguments[arguments.length - 1]);
                this.getListener().on.apply(this.getListener(), newArguments);
=======
                newArguments.push(arguments[arguments.length-1]);

                /***********************************************************/
                this.getListener().on.apply(this.getListener(),newArguments);

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
        }
        return this;
    }

    /**
     * @param  listener APIListener
     * @param  nameOfCaller string
     * @returns {APIHook}
     */
    static create(listener, nameOfCaller){
        if(typeof nameOfCaller == 'undefined'){
            nameOfCaller=(APIHook.latestHookID++);
        }
        if(typeof APIHook.CurrentHooks[nameOfCaller] =="undefined"){
            let hook= new APIHook(listener,nameOfCaller);
            APIHook.CurrentHooks[nameOfCaller]=hook;
            return hook;
        }
        return APIHook.CurrentHooks[nameOfCaller];
<<<<<<< HEAD
=======

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
    }

}
APIHook.latestHookID=1;
APIHook.CurrentHooks={};


<<<<<<< HEAD
class APIListener extends GenericAPI
{
    modules;


=======
class APIListener
{
    modules;

    eventHandler;
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e


    constructor()
    {
<<<<<<< HEAD
        super();
        this.modules={};
        console.debug("MAIN CLASS: "+this.constructor.name);

    }
    EventHandler(){
        if(APIListener.eventHandlers[this.constructor.name]){
            return APIListener.eventHandlers[this.constructor.name];
        }
        APIListener.eventHandlers[this.constructor.name]=new EventHandler();
        return APIListener.eventHandlers[this.constructor.name];
    }
=======
        this.modules={};
        this.eventHandler=new EventHandler();
    }

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
    AjaxCall(data, callback){

        //Here is where you can use what ever you want
        $.ajax(data).done(callback);
    }
    /**
     * On the event given your callback will be called
     * @return APIListener
     */
    on(){
        switch(arguments.length){
            case 0:
                throw new Error("Expecting at least 2 arguments, recieved 0");
            case 1:
                throw new Error("Expecting at least 2 arguments, recieved 1");
            default:
<<<<<<< HEAD
                EventHandler.prototype.on.apply(this.EventHandler(),arguments);
        }
        return this;
    }
    copy(){
        const newThing=new APIListener();
        newThing._ApiRepos=this._ApiRepos;
        newThing._modules=this._modules;
        return newThing;
    }
=======
                EventHandler.prototype.on.apply(this.eventHandler,arguments);
        }
        return this;
    }

>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e

    /**
     * Will have the api event be started evert {miliseconds} of time with the given data
     * @param name string
     * @param milliseconds int
     * @param data function|object
     */
    setConstantUpdate(name,milliseconds,data){
        if(typeof data=="function"){
            data=data();
        }
        else if(typeof data!="object"){
            throw new Error("Expecting either a function or data for constant update");
        }

        /*******************************************************************/
        let $this=this;
        let triggerFunction;
        triggerFunction=function(){
            $this.initiate(name,data);
            setTimeout(function(){
                triggerFunction();
            },milliseconds);
        };
        triggerFunction();

    }

    /**
     * Adds a api call. The name can be anything, so... example add-assessment
     * @param name string
     * @param callback function
     */
    addModule(name, callback)
    {
        /*******************************************************************/
        if(typeof callback != "function"){
            throw new Error("Expecting a function in addModule");
        }

        /*******************************************************************/
        let $this=this;
<<<<<<< HEAD
        this.EventHandler().on(name, "start",function(e)
        {
            const $e=new MyEvent({continue:true});
            this.EventHandler().triggerAllRoots(name,"beforeSend",$e);
            if($e.continue==false){
                return;
            }

            let Errors=[];
            $this.catchErrors(function(error){
                Errors.push(error);
            });

            this.EventHandler().triggerAllRoots(name,"start",$e);

            callback(e.data,function(data){ //.data
                const $e=new MyEvent({data:data});

                this.EventHandler().triggerAllRoots(name,"finished",$e);
                if(Errors.length!=0)
                {
                    $e.message=Errors.join(',');
                    this.EventHandler().triggerAllRoots(name,"failed",$e)
                }
                else
                {
                    this.EventHandler().triggerAllRoots(name,"updated",$e);
                }
            }.bind(this),this);

            // if(typeof e.___GET_API___ != 'undefined'){
            //     e.___GET_API___=$this.copy();
            // }
        }.bind(this));
    }
    generate(eventName, data)
    {
        data=new MyEvent({data:data,___GET_API___:false});
        this.skipExecute(true);
        this.EventHandler().triggerAllRoots(eventName,"start",data);

        if(!data.___GET_API___){
            throw new Error('API Module '+eventName+' failed to provide its api');
        }
        this.skipExecute(false);
        return data.___GET_API___.getAjaxInfo();

    }
    initiate(eventName, data)
    {
        this.EventHandler().trigger(eventName,"start",{data:data?data:{}});
=======
        this.eventHandler.on(name, "start",function(e){
            callback(e,function(data){ //.data
                $this.eventHandler.trigger(name,"updated",data);
            });
        });
    }

    initiate(eventName, data)
    {
        this.eventHandler.trigger(eventName,"start",data?data:{});
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
    }
    quick(moduleName,data,callback){
        this.hook().on(moduleName,callback);
        this.initiate(moduleName,data);
    }
    /**
     * This is the routine that is called to get an instance of the abilities of the listener
     * @returns {APIHook}
     */
    hook()
    {
<<<<<<< HEAD
        return APIHook.create(this); // Will auto generate one
    }
}

APIListener.eventHandlers={}; //new EventHandler();
=======
        switch(arguments.length)
        {
            case 0:
                let re = /.*at (.*)\(/g;
                let stack=new Error().stack;
                re.exec(stack); // First
                let aRegexResult=re.exec(stack); // Second
                if(aRegexResult==null){
                    return APIHook.create(this); // Will auto generate one
                }
                let sCallerName = aRegexResult[1];
                return APIHook.create(this,sCallerName);
                break;
            default:
        }
    }
}
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
export default APIListener;