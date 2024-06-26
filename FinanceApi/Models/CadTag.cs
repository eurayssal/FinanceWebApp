using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace FinanceApi.Models
{
    public class CadTag : BaseModel
    {
        public CadTag(string? nome)
        {
            Nome = nome;
        }

        public string? Nome { get; set; }
    }
}
