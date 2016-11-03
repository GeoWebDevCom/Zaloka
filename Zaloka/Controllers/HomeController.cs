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


        public string ThemUser(string Name,string Phone,string Email,string utm_sourse,string utm_medium,string utm_campaign,string utm_content, string utm_term)
        {
            using (ZalokaEntities ctx = new ZalokaEntities())
            {
                ZalokaUser user = new ZalokaUser()
                {
                    Name=Name,
                    Phone=Phone,
                    Email=Email,
                    utm_sourse=utm_sourse,
                    utm_medium=utm_medium,
                    utm_campaign=utm_campaign,
                    utm_content=utm_content,
                    utm_term =utm_term,
                    NgayDangKi=DateTime.Now
                };
                try
                {
                    ctx.ZalokaUsers.Add(user);
                    ctx.SaveChanges();
                    return "ok";
                }
                catch (Exception e)
                {
                    return e.Message;
                }

            }
        }


        public ActionResult Admin()
        {
            using (ZalokaEntities ctx = new ZalokaEntities())
            {
                var DNList = ctx.ZalokaUsers.OrderByDescending(t => t.NgayDangKi).Select(t => new ZalokaUserVM
                {
                    Name=t.Name,
                    Phone=t.Phone,
                    Email=t.Email,
                    utm_sourse=t.utm_sourse,
                    utm_medium=t.utm_medium,
                    utm_campaign=t.utm_campaign,
                    utm_content=t.utm_content,
                    utm_term=t.utm_term,
                    NgayDangKi=t.NgayDangKi
                }).ToList();

                return View(DNList);

            }
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