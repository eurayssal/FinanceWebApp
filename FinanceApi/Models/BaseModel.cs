using MongoDB.Bson.Serialization.Attributes;

namespace FinanceApi.Models
{
    public class BaseModel
    {
        [BsonId]
        public Guid Id { get; set; }
    }
}
