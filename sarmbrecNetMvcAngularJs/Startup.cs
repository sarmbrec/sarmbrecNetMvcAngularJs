using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(sarmbrecNetMvcAngularJs.Startup))]
namespace sarmbrecNetMvcAngularJs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
