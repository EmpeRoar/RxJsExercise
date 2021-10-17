using System;
using System.Collections.Generic;
using System.Text;

namespace BFF.Domain
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public ICollection<ProductCategoryLink> ProductCategoryLinks { get; set; }
    }
}
