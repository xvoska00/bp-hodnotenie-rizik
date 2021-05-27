import { isObject, countBy } from 'lodash-es';

const SeverityMapping = {
  // Kriterium 1
  kategorie_zhromazdovanych_udajov: {
    q1: 7,
    q2: 7,
    q3: 5,
    q4: 6,
    q5: 5,
    q6: 1,
  },
  // Kriterium 2
  identifikacia_dotknutej_osoby: {
    q1: 6,
    q2: 5,
    q3: 4,
    q4: 1,
  },
  // Kriterium 3
  subjekt_udajov: {
    1: 7,
    2: 4,
    3: 1,
  },
  // Kriterium 4
  rozsah_spracovania_osobnych_udajov: {
    velky: 7,
    stredny: 4,
    maly: 1,
  },
  // Kriterium 5
  nepretrzity_zber: {
    yes: 7,
    no: 1,
  },
  // Kriterium 6
  snimanie_verejne_pristupnych_priestorov: {
    1: 7,
    2: 4,
    3: 1,
  },
  // Kriterium 7
  osobne_udaje_verejne_pristupne: {
    1: 6,
    2: 4,
    3: 1,
  },
  // Kriterium 8
  automatizovane_systemy: {
    yes: 7,
    no: 1,
  },
  // Kriterium 9
  kombinovanie_osobnych_udajov: {
    yes: 7,
    no: 1,
  },
  // Kriterium 10
  tretie_strany: {
    main: {
      yes: 0,
      no: 1,
    },
    sub: {
      mimo_eu: {
        1: 6,
        2: 4,
        3: 1,
      },
      ucel: {
        q1: 1,
        q2: 1,
        q3: 1,
        q4: 1,
        q5: 7,
        q6: 4,
      },
    },
  },
  // Kriterium 11
  prava_k_spracuvaniu: {
    1: 1,
    2: 4,
    3: 7,
  },
  // Kriterium 12
  opatrenia_pre_zabezpecenie_pristupu: {
    yes: 1,
    no: 6,
  },
  // Kriterium 13
  informovanie_o_zasadach_vykonavania_spracuvania: {
    1: 1,
    2: 4,
    3: 5,
  },
  // Kriterium 14
  sifrovanie_pseudonymizacia: {
    yes: 0,
    no: 0,
  },
  // Kriterium 15
  dostupnost_systemu: {
    1: 1,
    2: 1,
    3: 3,
    4: 6,
  },
};

const descriptions = {
  // Kriterium 1
  'kategorie_zhromazdovanych_udajov.q1':
    'spracúvané sú citlivé osobné údaje a/alebo údaje týkajúce sa uznania viny za trestné činy a priestupky',
  'kategorie_zhromazdovanych_udajov.q2':
    'spracúvané osobné údaje je možné využiť pre prideľovanie bodov a vytváranie ohodnotenia subjektov údajov za účelom automatizovaného rozhodovania',
  // Kriterium 3
  subjekt_udajov: 'spracúvané osobné údaje sa týkajú zraniteľných subjektov údajov',
  // Kriterium 4
  rozsah_spracovania_osobnych_udajov: 'spracúvanie osobných údajov je realizované vo veľkom rozsahu',
  // Kriterium 5
  nepretrzity_zber: 'pre účely zaznamenania osobných údajov je realizované systematické monitorovanie subjektov údajov',
  // Kriterium 6
  snimanie_verejne_pristupnych_priestorov: 'pre účely zaznamenania osobných údajov je realizované monitorovanie verejne prístupných miest',
  // Kriterium 8
  automatizovane_systemy:
    'v rámci realizácie procesu spracúvania osobných údajov sú využívané inovatívne technologické a/alebo organizačné riešenia, vrátane automatizovaných systémov',
  // Kriterium 9
  kombinovanie_osobnych_udajov:
    'dochádza k spájaniu a/alebo kombinovaniu zaznamenaných osobných údajov s údajmi spracúvanými pre rozdielne účely',
  // Kriterium 10
  'tretie_strany.sub.ucel.q5':
    'zaznamenané osobné údaje sú predávané tretím stranám za účelom vytvárania bodového ohodnotenia subjektu údajov',
  // Kriterium 11
  prava_k_spracuvaniu: 'subjekt údajov si nemôže uplatniť svoje práva k prebiehajúcemu spracúvaniu',
};

/*
const MOCKED_DATA = {
  kategorie_zhromazdovanych_udajov: {
    q1: true,
    q2: false,
    q3: false,
    q4: false,
    q5: true,
    q6: true,
  },
  identifikacia_dotknutej_osoby: {
    q1: false,
    q2: false,
    q3: false,
    q4: true,
  },
  subjekt_udajov: '3',
  rozsah_spracovania_osobnych_udajov: 'maly',
  nepretrzity_zber: 'no',
  snimanie_verejne_pristupnych_priestorov: '3',
  osobne_udaje_verejne_pristupne: '3',
  automatizovane_systemy: 'no',
  kombinovanie_osobnych_udajov: 'no',
  tretie_strany: {
    main: 'yes',
    sub: {
      mimo_eu: '3',
      ucel: {
        q1: true,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
      },
    },
  },
  prava_k_spracuvaniu: '3',
  opatrenia_pre_zabezpecenie_pristupu: 'no',
  informovanie_o_zasadach_vykonavania_spracuvania: '1',
  sifrovanie_pseudonymizacia: 'yes',
  dostupnost_systemu: '1',
};
*/

const flatten = (data) => {
  var result = {};

  for (const [key, value] of Object.entries(data)) {
    if (key === 'tretie_strany') {
      result['tretie_strany.main'] = value.main;
      if (value.sub) {
        result['tretie_strany.sub.mimo_eu'] = value.sub.mimo_eu;
        for (const [key_nested, value_nested] of Object.entries(value.sub.ucel)) {
          result[`tretie_strany.sub.ucel.${key_nested}`] = value_nested;
        }
      }
    } else if (isObject(value)) {
      for (const [key_nested, value_nested] of Object.entries(value)) {
        result[`${key}.${key_nested}`] = value_nested;
      }
    } else {
      result[key] = value;
    }
  }
  return result;
};

const equal_high_severity_options = (data) => {
  var total = 0;
  // Exception for 5 together with 6 => Count as one
  if (data['nepretrzity_zber'] && data['snimanie_verejne_pristupnych_priestorov']) {
    total += 1;
  }

  // Exception for 1 together with 10B.
  if (data['kategorie_zhromazdovanych_udajov.q2'] && data['tretie_strany.sub.ucel.q5']) {
    total += 1;
  }
  return total;
};

const fast_eval_high_severity = (data) => {
  const flattened = flatten(data);

  var high = {};
  for (const [key, value] of Object.entries(flattened)) {
    if (value === 7) {
      high[key] = value;
    }
  }

  // Evaluate to true if there are at least 2 HIGH severity options set.
  var total = Object.keys(high).length;
  total -= equal_high_severity_options(high);
  return total >= 2;
};

const parse_form_data = (questionairre) => {
  var parsed = {};

  for (const [key, value] of Object.entries(SeverityMapping)) {
    const v = questionairre[key];

    if (key === 'tretie_strany') {
      parsed[key] = {};
      parsed[key]['main'] = value['main'][v['main']];
      if (v['main'] === 'yes') {
        parsed[key]['sub'] = {
          ucel: {},
        };
        parsed[key]['sub']['mimo_eu'] = value['sub']['mimo_eu'][v['sub']['mimo_eu']];
        for (const [key_nested, value_nested] of Object.entries(value['sub']['ucel'])) {
          if (v['sub']['ucel'][key_nested]) {
            parsed[key]['sub']['ucel'][key_nested] = value_nested;
          }
        }
      }
    } else if (isObject(v)) {
      for (const [key_nested, value_nested] of Object.entries(value)) {
        parsed[key] = parsed[key] || {};
        if (v[key_nested]) {
          parsed[key][key_nested] = value_nested;
        }
      }
    } else {
      parsed[key] = value[questionairre[key]];
    }
  }
  return parsed;
};

const is_crypto_enabled = (questionairre) => {
  return questionairre.sifrovanie_pseudonymizacia === 'yes';
};

const update_values_with_coefficient = (parsed, coeff) => {
  const update_single = (key, object = parsed) => {
    const value = object[key];
    if (value === 1 || value === 7) {
      return;
    }
    object[key] *= coeff;
  };

  const update_obj = (obj) => {
    for (const key of Object.keys(obj)) {
      update_single(key, obj);
    }
  };

  update_obj(parsed['kategorie_zhromazdovanych_udajov']);
  update_obj(parsed['identifikacia_dotknutej_osoby']);
  update_single('subjekt_udajov');
  update_single('rozsah_spracovania_osobnych_udajov');
  update_single('osobne_udaje_verejne_pristupne');
  if (parsed['tretie_strany']['sub']) {
    update_single('mimo_eu', parsed['tretie_strany']['sub']);
    update_obj(parsed['tretie_strany']['sub'][['ucel']]);
  }
  update_single('opatrenia_pre_zabezpecenie_pristupu');
  update_single('informovanie_o_zasadach_vykonavania_spracuvania');

  return parsed;
};

const cummulative_sum = (data) => {
  var result = 0;

  var counter = 1;

  for (const [key, value] of Object.entries(data)) {
    if (key === 'tretie_strany') {
      result += value.main;
      console.log(`(Q${counter})`, key, '+', value.main);
      if (value.sub) {
        result += value.sub.mimo_eu;
        console.log(`(Q${counter}A)`, key, '+', value.sub.mimo_eu);
        const max_val_from_checklist = Math.max(...Object.values(value.sub.ucel));
        result += max_val_from_checklist;
        console.log(`(Q${counter}B)`, key, '+ (max)', max_val_from_checklist);
      }
    } else if (isObject(value)) {
      const max_val_from_checklist = Math.max(...Object.values(value));
      result += max_val_from_checklist;
      console.log(`(Q${counter})`, key, '+ (max)', max_val_from_checklist);
    } else {
      result += value;
      console.log(`(Q${counter})`, key, '+', value);
    }
    counter++;
  }
  return result;
};

const generate_high_severity_descriptions = (parsed) => {
  var result = [];
  const flattened = flatten(parsed);
  for (const [key, value] of Object.entries(flattened)) {
    if (value === 7 && descriptions[key]) {
      result.push(descriptions[key]);
    }
  }
  return result;
};

const could_be_negligible = (parsed) => {
  const options = flatten(parsed);
  // All values must be less or equal 3.
  const max = Math.max(...Object.values(options));
  return max <= 3;
};

const could_be_small_risk = (parsed) => {
  const options = flatten(parsed);
  // Max 1 value with 5, all other must be less.
  const values = [...Object.values(options)];
  const max = Math.max(...values);
  if (max > 5) {
    return false;
  }
  const counts = countBy(values);
  if (counts['5']) {
    return counts['5'] <= 1;
  }
  return true;
};

const could_be_medium_risk = (parsed) => {
  const options = flatten(parsed);
  // Max 1 value with 6 or 7, all other must be less than or equal to 5.
  // We have to take exceptions into account.
  const values = [...Object.values(options)];
  const counts = countBy(values);

  if (counts['7']) {
    // We have to take exceptions into account.
    const decrease = equal_high_severity_options(options);
    counts['7'] -= decrease;
  }

  const t = (counts['6'] || 0) + (counts['7'] || 0);

  if (t >= 2) {
    return false;
  }
  return true;
};

export const evaluate_questionnaire = (questionairre) => {
  //questionairre = MOCKED_DATA;
  var parsed = parse_form_data(questionairre);

  const high_severity_descriptions = generate_high_severity_descriptions(parsed);

  if (fast_eval_high_severity(parsed)) {
    console.log('fast eval high risc!');
    return {
      severity: 'high',
      descriptions: high_severity_descriptions,
    };
  }

  if (is_crypto_enabled(questionairre)) {
    console.log('updating values because (14)');
    parsed = update_values_with_coefficient(parsed, 0.67);
    console.log('updated', parsed);
  }

  const cum_sum = cummulative_sum(parsed);
  console.log('cum_sum', cum_sum);

  var severity = null;
  // Note that we compare the limits in the methods such as `could_be_negligible()`
  // with the object `parsed` regardless the encryption constant.
  // When the encyption was used then the values of some options are changed
  // thus they may fit the limits for the given severity.
  if (cum_sum <= 17 && could_be_negligible(parsed)) {
    console.log('negligible!');
    severity = 'negligible';
  } else if (cum_sum < 28 && could_be_small_risk(parsed)) {
    console.log('small risk!');
    severity = 'small';
  } else if (cum_sum < 38 && could_be_medium_risk(parsed)) {
    console.log('medium risk!');
    severity = 'medium';
  } else {
    console.log('high risk!');
    severity = 'high';
  }

  return {
    severity: severity,
    descriptions: high_severity_descriptions,
  };
};
