export interface Wallpaper {
    id: string;
    imageUrl: string;
}

export interface Visi {
    id: string;
    visiDb: string;
}

export interface Misi {
    id: string;
    misiDb: string;
}

export interface Sejarah {
    id: string;
    label: string;
    imageUrl: string;
    teksSejarah: string;
}

export interface Artikel {
    id: string;
    label: string;
    imageUrl: string;
    sumber: string;
    teksArtikel: string;
    createdAt: string
}

export interface Agenda {
    id: string;
    label: string;
    imageUrl: string;
    teksAgenda: string;
}

export interface Pengurus {
    id: string;
    label: string;
    imageUrl: string;
    jabatan: string;
}

export interface Galeri {
    id: string;
    label: string;
    images: Image[];
    teksAgenda: string;
}


export interface Image {
    id: string;
    url: string;
}


export interface Jumat {
    id: string;
    imageUrl: string;
}

export interface Faq {
    id: string;
    tanya: string;
    jawab: string;
}

export interface Kontak {
    id: string;
    alamat: string;
    email: string;
    hp: string;
}