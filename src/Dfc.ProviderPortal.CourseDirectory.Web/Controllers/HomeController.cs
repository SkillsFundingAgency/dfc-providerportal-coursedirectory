using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dfc.ProviderPortal.CourseDirectory.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Index1()
        {
            return View();
        }
        public IActionResult Index2()
        {
            return View();
        }

        public IActionResult Details()
        {
            return View();
        }
        public IActionResult Archive1()
        {
            return View();
        }
        public IActionResult Restore()
        {
            return View();
        }
        public IActionResult StartPage()
        {
            return View();
        }
        public IActionResult Migration()
        {
            return View();
        }
    }
}