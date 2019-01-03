using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dfc.ProviderPortal.CourseDirectory.Web.Controllers
{
    public class ProvidersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult IndexError()
        {
            return View();
        }
        public IActionResult Add()
        {
            return View();
        }
        public IActionResult AddResults()
        {
            return View();
        }
        public IActionResult AddResultsSuccess()
        {
            return View();
        }
        public IActionResult Results()
        {
            return View();
        }
        public IActionResult NoResults()
        {
            return View();
        }
        public IActionResult Details()
        {
            return View();
        }
    }
}