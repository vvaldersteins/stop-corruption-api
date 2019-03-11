const mongoose = require('mongoose');

// const WinnerList = {
//     winner: {
//         winner_name: String,
//         winner_reg_num: String,
//         winner_address: String,
//         winner_city: String,
//         winner_zip_code: String,
//         winner_country: String,
//         winner_phone: String,
//         winner_fax: String,
//         winner_email: String,
//         winner_url: String,
//         publication_date: String,
//         price_exact_eur: Number,
//     }
// };
//
// const MainCpv = {
//     code: String,
//     code_num: String,
//     type: String,
//     lv: String,
//     en: String,
//     cpv_a: String,
//     cpv_b: String,
//     authority_name: String,
//     contract_price_exact: Number,
//     number_of_participant: Number,
//     approval_date: String,
// };

/**
 * Schema properties.
 *
 * @property {String} year Year of the fetch
 * @property {String} month Month of the fetch
 * @property {String} day Day of the fetch
 * @property {Date} fetchedAt Timestamp of the fetch
 */
const properties = {
    document_id: {
        type: String,
        unique: true,
        required: true,
    },
    source_notice: String,
    status: String,
    general: {
        procurement_code: String,
        procurement_id: String,
        // main_cpv: {
        //     code: String,
        //     code_num: String,
        //     type: String,
        //     lv: String,
        //     en: String,
        //     cpv_a: String,
        //     cpv_b: String,
        //     authority_name: String,
        //     contract_price_exact: Number,
        //     number_of_participant: Number,
        //     approval_date: String,
        // },
        name: String,
        price_from: Number,
        price_to: Number,
        procurement_type: String,
        authority_id: String,
        authority_name: String,
        authority_reg_num: String,
        address: String,
        city: String,
        zip_code: String,
        country: String,
        procurement_year: String,
        cpv_list: String,
        additional_cpv_list: String,
    },
    main_cpv: {
        code: String,
        code_num: String,
        type: String,
        lv: String,
        en: String,
        cpv_a: String,
        cpv_b: String,
        authority_name: String,
        contract_price_exact: Number,
        number_of_participant: Number,
        approval_date: String,
    },
    divided_in_parts: String,
    contract_name: String,
    place: String,
    region: String,
    eu_fund: Boolean,
    environment_req: String,
    approval_date_stamp: String,
    parts: String,
    part_5_list: {
        part_5: {
            contract_nr: String,
            part_nr: String,
            concluded_contract_name: String,
            decision_date: String,
            tender_num: String,
            initial_price: Number,
            initial_currency: String,
            contract_price_exact: Number,
            exact_currency: String,
            contract_price_from: Number,
            contract_price_to: Number,
            contract_with_vat: Boolean,
            contract_vat_rate: String,
            contract_currency: String,
            subcontracts: String,
            subcontract_price: Number,
            subcontract_currency: String,
            subcontract_proportion: String,
            subcontract_unknown: String,
            value_description: String,
            without_results: String,
            interrupted: String,
            interrupt_info: String,
            lower_price: Number,
            lower_currency: String,
            contract_count: String,
            product_from_eu: String,
            product_country: String,
            criteria_type: String,
            winner_with_variants: String,
            low_offers: String,
            years_expenses: String,
            months_expenses: String,
            contract_price_exact_lvl: Number,
            contract_price_exact_secret_lvl: Number,
            contract_price_exact_secret: Number,
            exact_currency_secret: String,
            publicate_winner: String,
            party_nr: String,
            party_nr_secret: String,
            winner_list: {
                winner: {
                    winner_name: String,
                    winner_reg_num: String,
                    winner_address: String,
                    winner_city: String,
                    winner_zip_code: String,
                    winner_country: String,
                    winner_phone: String,
                    winner_fax: String,
                    winner_email: String,
                    winner_url: String,
                    publication_date: String,
                    price_exact_eur: Number,
                }
            },
        }
    },
    authority_name: String,
    address: String,
    authority_reg_num: String,
    zip_code: String,
    city: String,
    country: String,
    middleman: String,
    creation_date: String,
    creation_date_stamp: String,
    authority_id: String,
    contactplaces: {
        contactplace: {
            type: String,
            name: String,
            short_name: String,
            reg_num: String,
            address: String,
            city: String,
            zip_code: String,
            country: String,
            place: String,
            person: String,
            phone: String,
            fax: String,
            email: String,
            url: String,
            url_client: String,
            procurement_doc_url: String,
            tender_submit_url: String,
        }
    },
    description: String,
    price_exact: Number,
    currency: String,
    eu_list: String,
    type: String,
    approval_date: String,
    publication_date: String,
    publication_date_stamp: String,
    statistics_version: String,
    price_exact_eur: Number,
    eur_conv_version: String,
    global_winner_title: String,
    global_winner_reg_num: String,
    set_global_data_version: String,
    populate_iub_winners: String,
    archived: Boolean,
    additional_info: {
        approval_date: String,
        approval_date_stamp: String,
        update_date: String,
        update_date_stamp: String,
    },
    part_2: {
        price_exact: Number,
        price_exact_eur: Number,
    },
    winner_list: {
        winner: {
            winner_name: String,
            winner_reg_num: String,
            winner_address: String,
            winner_city: String,
            winner_zip_code: String,
            winner_country: String,
            winner_phone: String,
            winner_fax: String,
            winner_email: String,
            winner_url: String,
            publication_date: String,
            price_exact_eur: Number,
        }
    },
    code: String,
    code_num: String,
    lv: String,
    en: String,
    cpv_a: String,
    cpv_b: String,
    contract_price_exact: Number,
    number_of_participant: Number,
};

const schema = new mongoose.Schema(properties);

module.exports = mongoose.model('IUBEntry', schema);
