const messages = {
  createTodos: {
    error: [
      {
        severity: 'error',
        title: 'Errore Creazione Todo',
        desc: 'Si è verificato un errore, riprovare piu tardi. [!number]',
        timeout: 10000
      },
      {
        severity: 'error',
        title: 'Errore Creazione Todo',
        desc: 'Si è verificato un errore, riprovare piu tardi. [insertMany]',
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
      desc: 'Informazioni sulla creazione dei Todo',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Creazione Todo',
      desc: 'La Creazione dei Todo è avvenuto con successo',
      timeout: 10000
    }
  },
  getTodos: {
    error: {
      severity: 'error',
      title: 'Errore Recupero dei Todo',
      desc: 'Si è verificato un errore, riprovare piu tardi.',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning Recupero dei Todo',
      desc: 'Si è verificato un errore, riprovare piu tardi.',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info Recupero dei Todo',
      desc: 'Informazioni sul recupero dei Todo',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Recupero dei Todo',
      desc: 'Il recupero dei Todo è avvenuto con successo',
      timeout: 10000
    }
  },
  deleteTodos: {
    error: {
      severity: 'error',
      title: 'Errore Cancellazione dei Todo',
      desc: 'Si è verificato un errore, riprovare piu tardi.',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning Cancellazione dei Todo',
      desc: 'Si è verificato un errore, riprovare piu tardi.',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info Cancellazione dei Todo',
      desc: 'Informazioni sulla cancellazione dei Todo',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Cancellazione dei Todo',
      desc: 'La Cancellazione dei Todo è avvenuto con successo',
      timeout: 10000
    }
  }
};

module.exports = messages;
