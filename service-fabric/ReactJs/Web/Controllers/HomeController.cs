using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => File("~/index.html", "text/html");
    }
}
