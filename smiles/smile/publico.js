import { db } from './firebase.js';
import { doc, getDoc, setDoc, getDocs, deleteDoc, updateDoc, increment, collection, query, orderBy, serverTimestamp } from 'firebase/firestore';

const COL = 'publico';

export const existe = async (id) => (await getDoc(doc(db, COL, id))).exists();

export const guardar = async ({ id, plantilla, nombre, de, para, msg, musica, emoji }) => {
  if (await existe(id)) return null;
  await setDoc(doc(db, COL, id), {
    plantilla, nombre, de, para, msg,
    musica: musica || '', emoji: emoji !== false,
    visitas: 0, activo: true, anonimo: true,
    expira: 30, creado: serverTimestamp()
  });
  return id;
};

export const buscar = async (id) => {
  const snap = await getDoc(doc(db, COL, id));
  if (!snap.exists() || !snap.data().activo) return null;
  updateDoc(doc(db, COL, id), { visitas: increment(1) }).catch(() => {});
  return snap.data();
};

export const listar = async () => {
  const snap = await getDocs(query(collection(db, COL), orderBy('creado', 'desc')));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const eliminar = async (id) => deleteDoc(doc(db, COL, id));