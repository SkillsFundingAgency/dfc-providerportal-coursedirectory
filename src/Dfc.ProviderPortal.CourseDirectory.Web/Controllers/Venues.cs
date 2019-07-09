using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dfc.ProviderPortal.CourseDirectory.Web.Controllers
{
    public class Venues : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AddVenue()
        {
            return View();
        }
        public IActionResult AddAddress()
        {
            return View();
        }
        public IActionResult AddAddressManual()
        {
            return View();
        }
        public IActionResult EditVenue()
        {
            return View();
        }
        public IActionResult EditAddress()
        {
            return View();
        }
        public IActionResult SelectAddress()
        {
            return View();
        }
        public IActionResult VenuesChoice()
        {
            return View();
        }
    }
}