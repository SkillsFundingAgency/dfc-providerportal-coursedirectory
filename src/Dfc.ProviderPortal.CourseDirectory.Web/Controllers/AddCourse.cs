using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dfc.ProviderPortal.CourseDirectory.Web.Controllers
{
    public class AddCourse : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Details()
        {
            return View();
        }
        public IActionResult CourseId()
        {
            return View();
        }
        public IActionResult CourseName()
        {
            return View();
        }
        public IActionResult NewAddCourse()
        {
            return View();
        }
        public IActionResult BulkUpload()
        {
            return View();
        }
    }
}