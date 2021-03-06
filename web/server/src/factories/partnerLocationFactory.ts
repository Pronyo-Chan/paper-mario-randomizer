import { ItemLocation } from '../entities/itemLocation';
import { ItemLocationType } from '../enums/itemLocationType';
import { Partner } from '../enums/partner';
import { KeyItem } from '../enums/keyItem';
import { EquipUpgrade } from '../enums/equipUpgrade';

export class PartnerLocationFactory {
    private static instance: PartnerLocationFactory;

    public getAllPartnerLocations(): ItemLocation[] {
        return [
            this.goombario,
            this.kooper,
            this.bombette,
            this.parakarry,
            this.bow,
            this.watt,
            this.sushie,
            this.lakilester
        ]
    }

    public goombario = new ItemLocation(
        Partner.GOOMBARIO,
        ItemLocationType.Partner,
        [[EquipUpgrade.HAMMER]],
        'kmr_02',
        false,
        0      
    );

    public kooper = new ItemLocation(
        Partner.KOOPER,
        ItemLocationType.Partner,
        [[KeyItem.KOOPER_SHELL, EquipUpgrade.HAMMER]],
        'nok_04',
        true,
        0
    )

    public bombette = new ItemLocation(
        Partner.BOMBETTE,
        ItemLocationType.Partner,
        [
            [Partner.KOOPER, EquipUpgrade.HAMMER, KeyItem.FORTRESS_KEY_1, KeyItem.FORTRESS_KEY_2],
            [Partner.KOOPER, EquipUpgrade.HAMMER, KeyItem.FORTRESS_KEY_1, KeyItem.FORTRESS_KEY_3],
            [Partner.KOOPER, EquipUpgrade.HAMMER, KeyItem.FORTRESS_KEY_1, KeyItem.FORTRESS_KEY_4],
            [Partner.KOOPER, EquipUpgrade.HAMMER, KeyItem.FORTRESS_KEY_2, KeyItem.FORTRESS_KEY_3],
            [Partner.KOOPER, EquipUpgrade.HAMMER, KeyItem.FORTRESS_KEY_2, KeyItem.FORTRESS_KEY_4],
            [Partner.KOOPER, EquipUpgrade.HAMMER, KeyItem.FORTRESS_KEY_3, KeyItem.FORTRESS_KEY_4],
            [Partner.KOOPER, Partner.BOMBETTE, EquipUpgrade.HAMMER, KeyItem.FORTRESS_KEY_1],
            [Partner.KOOPER, Partner.BOMBETTE, EquipUpgrade.HAMMER, KeyItem.FORTRESS_KEY_2],
            [Partner.KOOPER, Partner.BOMBETTE, EquipUpgrade.HAMMER, KeyItem.FORTRESS_KEY_3],
            [Partner.KOOPER, Partner.BOMBETTE, EquipUpgrade.HAMMER, KeyItem.FORTRESS_KEY_4],
        ],
        'trd_06',
        true,
        1
    )

    public parakarry = new ItemLocation(
        Partner.PARAKARRY,
        ItemLocationType.Partner,
        [
            [Partner.BOMBETTE, KeyItem.LETTER_01, KeyItem.LETTER_10, KeyItem.LETTER_25, EquipUpgrade.HAMMER],
            [KeyItem.LETTER_01, KeyItem.LETTER_10, KeyItem.LETTER_25, EquipUpgrade.HAMMER2]
        ],
        'iwa_10',
        true,
        2
    )

    public bow = new ItemLocation(
        Partner.BOW,
        ItemLocationType.Partner,
        [[KeyItem.BOOS_PORTRAIT, EquipUpgrade.HAMMER]],
        'obk_09',
        true,
        1
    )

    public watt = new ItemLocation(
        Partner.WATT,
        ItemLocationType.Partner,
        [[Partner.BOW, KeyItem.TOY_TRAIN, KeyItem.FRYING_PAN]],
        'omo_12',
        true,
        1
    )

    public sushie = new ItemLocation(
        Partner.SUSHIE,
        ItemLocationType.Partner,
        [
            [Partner.WATT, EquipUpgrade.HAMMER],
            [Partner.SUSHIE, EquipUpgrade.HAMMER, EquipUpgrade.BOOTS2]
        ],
        'jan_04',
        true,
        1
    )

    public lakilester = new ItemLocation(
        Partner.LAKILESTER,
        ItemLocationType.Partner,
        [
            [
                Partner.PARAKARRY,
                Partner.BOMBETTE,
                Partner.SUSHIE,
                KeyItem.WATER_STONE,
                KeyItem.MAGICAL_SEED_1,
                KeyItem.MAGICAL_SEED_2,
                KeyItem.MAGICAL_SEED_3,
                KeyItem.MAGICAL_SEED_4,
                EquipUpgrade.HAMMER
            ],
            [
                Partner.LAKILESTER,
                Partner.BOMBETTE,
                Partner.SUSHIE,
                KeyItem.WATER_STONE,
                KeyItem.MAGICAL_SEED_1,
                KeyItem.MAGICAL_SEED_2,
                KeyItem.MAGICAL_SEED_3,
                KeyItem.MAGICAL_SEED_4,
                EquipUpgrade.HAMMER
            ]
        ],
        'flo_13',
        true,
        3
    )

    private constructor() {
    }

    static getInstance(): PartnerLocationFactory {
        if (!PartnerLocationFactory.instance) {
            PartnerLocationFactory.instance = new PartnerLocationFactory();
        }
    
        return PartnerLocationFactory.instance;
    }
}