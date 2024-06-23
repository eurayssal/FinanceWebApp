using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace FinanceApi.Models
{
    public class CadCategoria : BaseModel
    {
        public string? Nome { get; set; }
        public bool Atividade { get; set; }
    }
}
