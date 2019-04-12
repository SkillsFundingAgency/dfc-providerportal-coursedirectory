using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dfc.ProviderPortal.CourseDirectory.Web.Controllers
{
    public class UR : Controller
    {
        public IActionResult Index()
        {
            return View();
        }



        public IActionResult CoursePage()
        {
            return View();
        }
   

        public IActionResult CourseList()
        {
            return View();
        }

        public IActionResult EditCourse()
        {
            return View();
        }

    }
}