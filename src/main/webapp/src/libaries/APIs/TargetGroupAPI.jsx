import APIListener  from './APIListener.jsx';

class TargetGroupAPI extends APIListener {

    constructor() {
        super();
        const $this = this;

<<<<<<< HEAD
        /*******************************************************************/
=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
        this.addModule("create-new-targetgroup", function (data, done) {
            $this.AjaxCall({
                url: "/rest/targetGroups",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(data)
            }, function () {
                $this.initiate("get-targetgroups");
                done({success:true});
            });
        });

<<<<<<< HEAD
        /*******************************************************************/
=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
        this.addModule("get-targetgroups", function (data, done) {
            $this.AjaxCall({
                url: "/rest/targetGroups",
                method: "GET",
            }, function (data) {
                done({
                    targetGroupsData: data
                });
            });
        });

<<<<<<< HEAD
        /*******************************************************************/
=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
        this.addModule("get-targetgroup", function (data, done) {
            $this.AjaxCall({
                url: "/rest/targetGroups/" + data.id,
                method: "GET",
            }, function (data) {
                done({
                    targetGroupData: data
                });
            });
        });

<<<<<<< HEAD
        /*******************************************************************/
=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
        this.addModule("add-participant-to-targetgroup",function(data,done){
            $this.AjaxCall({
                url: "/rest/targetGroups/" + data.id + "/participants",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(data.participant)
            },function () {
                $this.initiate("get-targetgroup",data);
                done({success:true});
            });

        });
<<<<<<< HEAD

        /*******************************************************************/
=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
        this.addModule("add-participants-to-targetgroup",function(data,done){
            $this.AjaxCall({
                url: "/rest/targetGroups/" + data.id + "/participantList",
                method: "POST",
                contentType: "application/json",
                data: JSON.stringify(data.participants)
            },function () {
                $this.initiate("get-targetgroup",data);
                done({success:true});
            });

        });
<<<<<<< HEAD

        /*******************************************************************/
=======
>>>>>>> 9f5ffe0f76db53075822042f1afeb7248f2b295e
        this.addModule("get-targetgroup-participants", function (data, done) {
            $this.AjaxCall({
                url: "/rest/targetGroups/" + data.id + "/participants",
                method: "GET",
            }, function (data) {
                done({
                    participantsData: data
                });
            });
        });
    }
    addParticipants(id, participants){
        this.initiate("add-participants-to-targetgroup",{id:id,participants:participants});
    }
    addParticipant(id,participant){
        this.initiate("add-participant-to-targetgroup",{id:id,participant:participant});
    }
}

TargetGroupAPI.instance = new TargetGroupAPI();

export default TargetGroupAPI;