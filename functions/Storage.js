import React from "react";
import { useMMKVStorage } from "react-native-mmkv-storage";
import MMKV from '../../functions/mmks';

const Storage = () => {
    const [storage, setStorage] = useMMKVStorage("@language", MMKV,"");
}
export default Storage

