using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Zaloka.Startup))]
namespace Zaloka
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
