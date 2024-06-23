using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace FinanceApi.Models
{
    public class CadTag : BaseModel
    {
        public string? Nome { get; set; }
    }
}
