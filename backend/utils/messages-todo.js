const messages = {
  test: {
    error: {
      severity: 'error',
      title: 'Errore Test Todo',
      desc: 'Impossibile fare il Test Todos',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning Test Todo',
      desc: 'Mancano alcuni valori per fare il Test Todos',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info Test',
      desc: 'Informazioni sul Test Todos',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Test Todos',
      desc: 'Il Test su Todos è avvenuto con successo',
      timeout: 10000
    }
  },
  createTodo: {
    error: [
      {
        severity: 'error',
        title: 'Errore Creazione Todo',
        desc: 'Si è verificato un errore, riprovare piu tardi. [save]',
        timeout: 10000
      },
      {
        severity: 'error',
        title: 'Errore Creazione Todo',
        desc:
          'Si è verificato un errore, riprovare piu tardi. [findByIdAndUpdate]',
        timeout: 10000
      },
      {
        severity: 'error',
        title: 'Errore Creazione Todo',
        desc: 'Si è verificato un errore, riprovare piu tardi. [!user]',
        timeout: 10000
      }
    ],
    warning: {
      severity: 'warning',
      title: 'Warning Creazione Todo',
      desc: 'Si è verificato un errore, riprovare piu tardi.',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info Creazione Todo',
      desc: 'Informazioni sulla creazione del Todo',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Creazione Todo',
      desc: 'La Creazione del Todo è avvenuto con successo',
      timeout: 10000
    }
  },
  getTodo: {
    error: [
      {
        severity: 'error',
        title: 'Errore Recupero del Todo',
        desc: 'Si è verificato un errore, riprovare piu tardi.[findById]',
        timeout: 10000
      },
      {
        severity: 'error',
        title: 'Errore Recupero del Todo',
        desc: 'Si è verificato un errore, riprovare piu tardi.[!todo]',
        timeout: 10000
      }
    ],
    warning: {
      severity: 'warning',
      title: 'Warning Recupero del Todo',
      desc: 'Si è verificato un errore, riprovare piu tardi.',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info Recupero del Todo',
      desc: 'Informazioni sul recupero del Todo',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Recupero del Todo',
      desc: 'Il recupero del Todo è avvenuto con successo',
      timeout: 10000
    }
  },
  updateTodo: {
    error: {
      severity: 'error',
      title: 'Errore Modifica del Todo',
      desc: 'Si è verificato un errore, riprovare piu tardi.',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning Modifica del Todo',
      desc: 'Si è verificato un errore, riprovare piu tardi.',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info Modifica del Todo',
      desc: 'Informazioni sulla modifica del Todo',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Modifica del Todo',
      desc: 'La modifica del Todo è avvenuto con successo',
      timeout: 10000
    }
  },
  deleteTodo: {
    error: {
      severity: 'error',
      title: 'Errore Cancellazione del Todo',
      desc: 'Si è verificato un errore, riprovare piu tardi.',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning Cancellazione del Todo',
      desc: 'Si è verificato un errore, riprovare piu tardi.',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info Cancellazione del Todo',
      desc: 'Informazioni sulla cancellazione del Todo',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Cancellazione del Todo',
      desc: 'La Cancellazione del Todo è avvenuto con successo',
      timeout: 10000
    }
  }
};

module.exports = messages;
