using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dfc.ProviderPortal.CourseDirectory.Web.Controllers
{
    public class Migration : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult FixErrors()
        {
            return View();
        }
        public IActionResult NotTransferred()
        {
            return View();
        }
    }
}