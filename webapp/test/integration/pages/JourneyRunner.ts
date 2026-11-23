import JourneyRunner from "sap/fe/test/JourneyRunner";
import ListReport from "sap/fe/test/ListReport";
import ObjectPage from "sap/fe/test/ObjectPage";
import CustomRequestsListGenerated from "./RequestsList.gen";
import CustomRequestsObjectPageGenerated from "./RequestsObjectPage.gen";
import CustomTasksObjectPageGenerated from "./TasksObjectPage.gen";

const runner = new JourneyRunner({
    launchUrl: sap.ui.require.toUrl("sapui5/maintenanceplanner") + "/test/flp.html#app-preview",
    pages: {
        onTheRequestsListGenerated: new ListReport(
            {
                appId: "sapui5.maintenanceplanner",
                componentId: "RequestsList",
                entitySet: "",
                contextPath: "/Requests"
            },
            CustomRequestsListGenerated
        ),
        onTheRequestsObjectPageGenerated: new ObjectPage(
            {
                appId: "sapui5.maintenanceplanner",
                componentId: "RequestsObjectPage",
                entitySet: "",
                contextPath: "/Requests"
            },
            CustomRequestsObjectPageGenerated
        ),
        onTheTasksObjectPageGenerated: new ObjectPage(
            {
                appId: "sapui5.maintenanceplanner",
                componentId: "TasksObjectPage",
                entitySet: "",
                contextPath: "/Requests/_Task"
            },
            CustomTasksObjectPageGenerated
        )
    },
    async: true
});

export default runner;
