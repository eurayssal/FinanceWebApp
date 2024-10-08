﻿using FinanceApi.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace FinanceApi.Controllers.CadConta
{
    public class CadContaViewModel : BaseViewModel
    {
        [Required(ErrorMessage = "O Nome é obrigatório.")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O saldo é obrigatório.")]
        public decimal Saldo { get; set; }
        public bool Status { get; set; }
    }
}
