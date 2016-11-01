using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Zaloka.Models
{
    public class ZalokaUserVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string utm_sourse { get; set; }
        public string utm_medium { get; set; }
        public string utm_campaign { get; set; }
        public string utm_content { get; set; }
        public Nullable<System.DateTime> NgayDangKi { get; set; }
        public string utm_term { get; set; }
    }
}