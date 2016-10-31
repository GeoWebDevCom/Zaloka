using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Zaloka.Models;

namespace Zaloka.Controllers
{
    public class HomeController : Controller
    {




        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ThankYou()
        {
            return View();
        }

        [HttpPost]
        public string SubmitInfor(string name, string email, string phone)
        {
            using (ZalokaEntities db = new ZalokaEntities())
            {

            }


                return "";
        }


        public ActionResult Admin()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}