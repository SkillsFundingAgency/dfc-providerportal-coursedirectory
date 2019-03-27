using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Dfc.ProviderPortal.CourseDirectory.Web.Controllers
{
    public class LarsController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Results()
        {
            return View();
        }
        public IActionResult singleResult()
        {
            return View();
        }
        public IActionResult nonregulated()
        {
            return View();
        }
        public IActionResult nonregsearch()
        {
            return View();
        }
    }
}
