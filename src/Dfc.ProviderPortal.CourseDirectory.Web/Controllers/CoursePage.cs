﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dfc.ProviderPortal.CourseDirectory.Web.Controllers
{
    public class CoursePage : Controller
    {
        public IActionResult Index()
        {
            return View();
        }



        public IActionResult Button()
        {
            return View();
        }


    }
}