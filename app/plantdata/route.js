import { NextRequest, NextResponse } from "next/server";
import db from './_firebase.js';
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

export async function GET(request) {
    try {
        var newData = [];
        await getDocs(collection(db, 'plantdata')).then(
            (querySnapshot) => {
                newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id }));
            }
        )

        return NextResponse.json(
            newData,
            {
                status: 200,
            }
        );
    }
    catch(err) {
        return NextResponse.json(
            {
                "error": err,
            }, 
            {
                status: 404,
            }
        )
    }
}

export async function POST(request) {
    try {
        const newData = await request.json();
        const plant1Ref = doc(db, "plantdata", "1");
        await updateDoc(plant1Ref, newData);

        return NextResponse.json(
            {
                message: "Request worked",
            },
            {
                status: 200,
            }
        );
    }
    catch(err) {
        return NextResponse.json(
            {
                "error": err,
                "request": request.body,
            }, 
            {
                status: 404,
            }
        )
    }
}


export const revalidate = 5;