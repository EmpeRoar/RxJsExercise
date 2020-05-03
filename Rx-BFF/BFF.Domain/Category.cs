using System;
using System.Collections.Generic;
using System.Text;

namespace BFF.Domain
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<ProductCategoryLink> ProductCategoryLinks { get; set; }
    }
}
