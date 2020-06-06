const messages = {
  test: {
    error: {
      severity: 'error',
      title: 'Errore Test Auth',
      desc: 'Impossibile fare il Test Auths',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning Test Auth',
      desc: 'Mancano alcuni valori per fare il Test Auths',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info Test',
      desc: 'Informazioni sul Test Auths',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Test Auths',
      desc: 'Il Test su Auths è avvenuto con successo',
      timeout: 10000
    }
  },
  register: {
    error: [
      {
        severity: 'error',
        title: 'Errore Registrazione',
        desc: 'Si è verificato un errore, riprovare piu tardi. [findOne]',
        timeout: 10000
      },
      {
        severity: 'error',
        title: 'Errore Registrazione',
        desc:
          'Si è verificato un errore, riprovare piu tardi. [countDocuments]',
        timeout: 10000
      },
      {
        severity: 'error',
        title: 'Errore Registrazione',
        desc:
          'Si è verificato un errore, riprovare piu tardi. [createHash-password]',
        timeout: 10000
      },
      {
        severity: 'error',
        title: 'Errore Registrazione',
        desc:
          'Si è verificato un errore, riprovare piu tardi. [createHash-verify]',
        timeout: 10000
      },
      {
        severity: 'error',
        title: 'Errore Registrazione',
        desc: 'Si è verificato un errore, riprovare piu tardi. [sendEmailAuth]',
        timeout: 10000
      },
      {
        severity: 'error',
        title: 'Errore Registrazione',
        desc: 'Si è verificato un errore, riprovare piu tardi. [save]',
        timeout: 10000
      }
    ],
    warning: [
      {
        severity: 'warning',
        title: 'Warning Registrazione',
        desc: 'Credenziali non valide, impossibile accedere.',
        timeout: 10000
      },
      {
        severity: 'warning',
        title: 'Warning Registrazione',
        desc: 'Un utente con questa email è già registrato',
        timeout: 10000
      }
    ],
    info: {
      severity: 'info',
      title: 'Info Registrazione',
      desc: 'Informazioni sulla Registrazione',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Registrazione',
      desc: 'La Registrazione è avvenuto con successo',
      timeout: 10000
    }
  },
  verification: {
    error: {
      severity: 'error',
      title: 'Errore Verification',
      desc: 'Si è verificato un errore, riprovare piu tardi',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning Verification',
      desc: '',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info Verification',
      desc: '',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Verification',
      desc: '',
      timeout: 10000
    }
  },
  loadUser: {
    error: {
      severity: 'error',
      title: 'Errore Autorizzazione',
      desc: 'Autorizzazione fallita, impossibile accedere',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning loadUser',
      desc: '',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info loadUser',
      desc: '',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success loadUser',
      desc: '',
      timeout: 10000
    }
  },
  login: {
    error: {
      severity: 'error',
      title: 'Errore Login',
      desc: 'Si è verificato un errore, riprovare piu tardi',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning Login',
      desc: 'Credenziali non valide, impossibile accedere',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Account non Attivato',
      desc: `L' account non è stato ancora attivato,
        Per attivarlo clicca il bottone nel messaggio che ti
        è stato inviato alla tua email.`,
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Login',
      desc: 'Login avvenuto con successo',
      timeout: 10000
    }
  },
  logout: {
    error: {
      severity: 'error',
      title: 'Errore Logout',
      desc: 'Si è verificato un errore, riprovare piu tardi',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning Logout',
      desc: 'Credenziali non valide, impossibile accedere',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Account non Attivato',
      desc: `L' account non è stato ancora attivato,
        Per attivarlo clicca il bottone nel messaggio che ti
        è stato inviato alla tua email.`,
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Logout',
      desc: 'Logout avvenuto con successo',
      timeout: 10000
    }
  },
  resetPassword: {
    error: [
      {
        severity: 'error',
        title: 'Errore Reset Password',
        desc: 'Si è verificato un errore, riprovare piu tardi',
        timeout: 10000
      },
      {
        severity: 'error',
        title: 'Errore Reset Password',
        desc: `email non inviata all'utente`,
        timeout: 10000
      }
    ],
    warning: [
      {
        severity: 'warning',
        title: 'Warning Reset Password',
        desc: 'è richiesta un email valida',
        timeout: 10000
      },
      {
        severity: 'warning',
        title: 'Warning Reset Password',
        desc: `Non ci sono utenti registrati con l' email da te inserita. Riprova con un'altra email`,
        timeout: 10000
      }
    ],
    info: {
      severity: 'info',
      title: 'Info Reset Password',
      desc: `L' account non è stato ancora attivato,
        Per attivarlo clicca il bottone nel messaggio che ti
        è stato inviato alla tua email.`,
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Reset Password',
      desc: 'Logout avvenuto con successo',
      timeout: 10000
    }
  },
  newPassword: {
    error: {
      severity: 'error',
      title: 'Errore New Password',
      desc: 'Si è verificato un errore, riprovare più tardi',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning New Password',
      desc: 'Mancano alcuni valori',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info New Password',
      desc: 'Il informazioni sul New Password',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success New Password',
      desc: 'Il Test è avvenuto con successo',
      timeout: 10000
    }
  },
  deleteAccount: {
    error: {
      severity: 'error',
      title: 'Errore Cancellazione Account',
      desc: 'Cancellazione non riuscita, riprovare più tardi',
      timeout: 10000
    },
    warning: {
      severity: 'warning',
      title: 'Warning Cancellazione Account',
      desc: '',
      timeout: 10000
    },
    info: {
      severity: 'info',
      title: 'Info Cancellazione Account',
      desc: 'Il informazioni sul New Password',
      timeout: 10000
    },
    success: {
      severity: 'success',
      title: 'Success Cancellazione Account',
      desc: `L' account è stato cancellato`,
      timeout: 10000
    }
  }
};

module.exports = messages;
