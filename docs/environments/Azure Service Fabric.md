# Azure Service Fabric Support

All stuffs in `sm-react-service-fabric` folder are using for **[Azure Service Fabric](https://azure.microsoft.com/en-us/services/service-fabric/)** hosting purpose.

The C# project inside this folder will copy all files from dist folder to wwwroot folder and host them as a static side in Azure Service Fabric.

Currently, I'm using .Net Core 2.1 to make the project is flexible enough to host on any platforms.

When build the Service Fabric application it will copy all files in `dist` folder to `wwwroot` folder. So ensure you run the `npm build` before deploy the Service Fabric app.

However if you are not using Service Fabric just simply remove the submodule **sm-react-service-fabric** There is no impact to the application.
