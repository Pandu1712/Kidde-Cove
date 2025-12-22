import {
    Mic,
    Brain,
    Hand,
    Leaf,
    BookOpen,
    Activity,
    Backpack,
    Baby,
    Users,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
    id: string;
    title: string;
    icon: LucideIcon;
    images: string[];
    content: JSX.Element;
    description: string;

}

export const servicesData: Service[] = [
    /* ================= SPEECH THERAPY ================= */
    {
        id: "speech-therapy",
        title: "Speech Therapy",
        icon: Mic,
        
        description: "Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",
        images: [
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.57.46_fe5bdcd5_acddhz.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.57.48_49c55b82_phjfeq.jpg"
        ],
        content: (
            <>
                <blockquote className="italic border-l-4 border-orange-400 pl-4">
                    “To effectively communicate, we must realize that we are all different
                    in the way we perceive the world.” — Tony Robbins
                </blockquote>

                <p>
                    Speech Therapy at <strong>Kiddie-Cove</strong> is designed to help children communicate
                    with clarity, confidence, and ease. Our therapists work closely with
                    each child to understand their individual strengths and areas of need.
                </p>

                <p>
                    We carefully assess each child’s communication needs and create
                    individualized therapy plans that support meaningful and steady
                    progress.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    We work on{" "}
                    <strong className="font-semibold text-gray-900">
                        articulation, speech clarity, language development,
                        vocabulary building, and both expressive and receptive language skills.
                    </strong>{" "}
                    Sessions are engaging and play-based, allowing children to learn
                    naturally while staying motivated in a supportive environment.
                </p>


                <p>
                    Speech therapy also focuses on <strong>social communication</strong>, helping children

                    express their thoughts, needs, and emotions effectively in everyday
                    situations. Parents are actively involved through guidance and
                    practical home strategies.
                </p>

                <p>
                    At <strong><strong>Kiddie-Cove</strong></strong>, we believe that helping a child find their voice is the
                    first step toward building confidence and connection.
                </p>

                <h4 className="font-bold mt-6">Who Can Benefit from Speech Therapy?</h4>
                <ul className="list-disc ml-6">
                    <li>Children with delayed speech or language development</li>
                    <li>Children who have difficulty pronouncing sounds or words</li>
                    <li>Children with limited vocabulary or sentence formation</li>
                    <li>Children who struggle to understand or follow instructions</li>
                    <li>Children facing challenges in social communication</li>
                </ul>
            </>
        ),
    },

    /* ================= BEHAVIOURAL MODIFICATION ================= */
    {
        id: "behavioural-therapy",
        title: "Behavioural Modification Therapy",
        icon: Brain,
        description: "Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

        images: [
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.57.59_c2ba1284_wn3wmv.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.58.00_2872b429_zs4bb8.jpg"
        ],
        content: (
            <>
                <blockquote className="italic border-l-4 border-orange-400 pl-4">
                    “The greatest discovery of my generation is that a human being can
                    alter his life by altering his attitudes.” — William James
                </blockquote>

                <p>
                    Behavioural Modification Therapy at <strong>Kiddie-Cove</strong> focuses on helping
                    children develop positive behaviours, emotional balance, and effective
                    responses to everyday situations.
                </p>

                <p>
                   Our therapists work with children to improve <strong>emotional regulation, cognitive thinking, attention, impulse control,</strong>
                    and <strong>adaptive social skills</strong>. Therapy is structured yet flexible, using positive reinforcement, goal-based strategies,
                     and consistent routines to encourage lasting behavioural change.
                </p>

                <p>
                  We strongly believe in collaboration with families. Parents are guided with practical strategies to support consistency at home,
                   helping children apply learned skills beyond the therapy setting.
                </p>

                <p>
                   At Kiddie Cove, behavioural therapy is not about correction — it is about understanding, guidance,
                    and empowering children to succeed.
                </p>

                <h4 className="font-bold mt-6">
                    Who Can Benefit from Behavioural Modification Therapy?
                </h4>
                <ul className="list-disc ml-6">
                    <li>Children with frequent emotional outbursts</li>
                    <li>Children with attention or impulse-control challenges</li>
                    <li>Children facing social or adaptive behaviour difficulties</li>
                    <li>Children struggling with routines or transitions</li>
                    <li>Children needing support with self-regulation skills</li>
                </ul>
            </>
        ),
    },

    /* ================= OCCUPATIONAL THERAPY ================= */
    {
        id: "occupational-therapy",
        title: "Occupational Therapy (OT)",
        icon: Hand,
        description: "Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

        images: [
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.58.55_c625f47f_uo7tqf.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.58.55_7a5c113b_vfslbg.jpg"
        ],
        content: (
            <>
                <blockquote className="italic border-l-4 border-orange-400 pl-4">
                    “The only way to do great work is to love what you do.” — Steve Jobs
                </blockquote>

                <p>
                   Occupational Therapy at<strong> Kiddie Cove</strong> helps children develop the skills they need to participate independently and confidently in everyday
                    activities. Our therapists focus on understanding each child’s sensory, motor, and functional needs to create personalized intervention plans.
                </p>

                <p>
                    We work on <strong>fine and gross motor coordination, sensory integration, hand-eye coordination</strong>, and <strong>daily living skills </strong>such as dressing, feeding, writing, and play.
                     Therapy sessions are engaging and goal-oriented, helping children build strength, coordination, and confidence in a supportive environment.
                </p>

                <p>
                   Occupational Therapy also supports children in managing sensory sensitivities and improving attention, posture, and endurance, enabling them to perform daily tasks with greater ease and independence. 
                   Parent involvement and home strategies play a key role in reinforcing progress beyond the therapy room.
                </p>
                <p>At Kiddie Cove, we aim to empower children with the skills they need to navigate daily life successfully.</p>
                <h4 className="font-bold mt-6">
                    Who Can Benefit from Occupational Therapy?
                </h4>
                <ul className="list-disc ml-6">
                    <li>Children with fine or gross motor delays</li>
                    <li>Children with sensory processing challenges</li>
                    <li>Children struggling with self-care activities</li>
                    <li>Children with poor coordination or posture</li>
                    <li>Children needing classroom skill support</li>
                </ul>
            </>
        ),
    },

    /* ================= ABA THERAPY ================= */
    {
        id: "aba-therapy",
        title: "ABA Therapy",
        icon: Leaf,
        description: "Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

        images: [
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.58.00_ebba066d_ytwg4t.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.58.00_f4fb3436_flgzmd.jpg"
        ],
        content: (
            <>
                <blockquote className="italic border-l-4 border-orange-400 pl-4">
                    “What we learn with pleasure we never forget.” — Alfred Mercier
                </blockquote>

                <p><strong>Applied Behavior Analysis (ABA) Therapy</strong> at<strong> Kiddie Cove</strong> is a structured, evidence-based approach designed to help children develop 
                    essential skills, improve communication, and enhance adaptive behaviour. Each child receives a personalized therapy plan based on 
                    their individual needs, strengths, and goals.
                </p>

                <p>
                    ABA Therapy focuses on<strong> learning new skills, reducing challenging behaviours</strong>, and promoting <strong>social, communication, and life skills</strong>. Sessions use positive reinforcement 
                    and carefully designed exercises to ensure progress is measurable, meaningful, and fun for the child.
                </p>
                <p>Parent involvement is an integral part of ABA therapy, helping families apply strategies at home to reinforce learning and encourage consistent behavioural growth.</p>
                <p>At Kiddie Cove, ABA Therapy empowers children to reach their potential and thrive in everyday life.</p>
                <p>
                    Parents play a vital role in reinforcing progress at home through
                    guided strategies.
                </p>

                <h4 className="font-bold mt-6">Who Can Benefit from ABA Therapy?</h4>
                <ul className="list-disc ml-6">
                    <li>Children with autism spectrum disorder (ASD)</li>
                    <li>Children with communication challenges</li>
                    <li>Children with repetitive or challenging behaviours</li>
                    <li>Children needing adaptive life skills</li>
                    <li>Children benefiting from structured learning programs</li>
                </ul>
            </>
        ),
    },

    /* ================= SPECIAL EDUCATION ================= */
    {
        id: "special-education",
        title: "Special Education",
        icon: BookOpen,
        description: "Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

        images: [
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.59.45_57d5f5cd_o9s4y0.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_20.59.45_7d8c0ac7_k29u2z.jpg"
        ],
        content: (
            <>
                <blockquote className="italic border-l-4 border-orange-400 pl-4">
                    “Education is not the filling of a pail, but the lighting of a fire.”
                    — William Butler Yeats
                </blockquote>

                <p>
                    Special Education at <strong><strong>Kiddie-Cove</strong></strong>provides individualized academic and developmental support tailored to each child’s
                     unique learning abilities. Our approach focuses on creating personalized learning plans that build essential skills, encourage confidence, and promote meaningful progress.
                </p>

                <p>
                    We address <strong>academic skills, cognitive development, social-emotional learning</strong>, and <strong>functional life skills</strong>, using evidence-based strategies
                     and engaging teaching methods. Sessions are designed to be interactive and motivating, helping children develop independence and a love for learning.
                </p>
                <p>Parent collaboration is central to our approach, with guidance provided to reinforce learning at home and ensure consistent growth across environments.</p>
                <p>At Kiddie Cove, we believe that every child can achieve their full potential with the right support and encouragement.   </p>

                <h4 className="font-bold mt-6">
                    Who Can Benefit from Special Education?
                </h4>
                <ul className="list-disc ml-6">
                    <li>Children with learning delays</li>
                    <li>Children with developmental disorders</li>
                    <li>Children needing academic or functional support</li>
                    <li>Children with attention or memory difficulties</li>
                    <li>Children needing adaptive learning guidance</li>
                </ul>
            </>
        ),
    },

    /* ================= PHYSIOTHERAPY ================= */
    {
        id: "physiotherapy",
        title: "Physiotherapy",
        icon: Activity,
        description: "Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

        images: [
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_21.00.27_ea48110c_nq8uwt.jpg",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/WhatsApp_Image_2025-12-20_at_21.00.27_4f3ef4a5_rp6geh.jpg"
        ],
        content: (
            <>
                <blockquote className="italic border-l-4 border-orange-400 pl-4">
                    “Strength does not come from physical capacity. It comes from an
                    indomitable will.” — Mahatma Gandhi
                </blockquote>

                <p>
                  <strong>  Physiotherapy</strong> at <strong>Kiddie-Cove</strong>focuses on helping children
                   develop strength, coordination, balance, and overall gross motor skills to move confidently and safely in their environment. Our therapy sessions are designed to address each child’s
                   specific physical needs through engaging, goal-oriented activities.
                </p>

                <p>
                    We work on<strong>posture, muscle strength, coordination, flexibility, and mobility,</strong> while also supporting endurance and functional movement for everyday activities. 
                    Therapy is tailored to each child’s abilities, ensuring progress in a safe and motivating environment.
                </p>
                <p>Parents are guided with strategies to reinforce exercises at home, promoting consistency and faster improvement.</p>
                <p>At Kiddie Cove, our physiotherapy program helps children gain the physical confidence they need to explore, play, and participate fully in daily life.</p>
                <h4 className="font-bold mt-6">Who Can Benefit from Physiotherapy?</h4>
                <ul className="list-disc ml-6">
                    <li>Children with delayed gross motor development</li>
                    <li>Children with balance or posture challenges</li>
                    <li>Children recovering from injuries</li>
                    <li>Children needing strength or endurance support</li>
                    <li>Children requiring mobility guidance</li>
                </ul>
            </>
        ),
    },

    /* ================= SCHOOL READINESS ================= */
    {
        id: "school-readiness",
        title: "School Readiness Program",
        icon: Backpack,
        description: "Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

        images: [
            "https://res.cloudinary.com/dd4oiwnep/image/upload/unnamed_5_uc5ll9.png",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/unnamed_4_vkisqd.png"
        ],
        content: (
            <>
                <blockquote className="italic border-l-4 border-orange-400 pl-4">
                    “The beautiful thing about learning is that no one can take it away
                    from you.” — B.B. King
                </blockquote>

                <p>
                    The<strong> School Readiness Program </strong>at <strong>Kiddie Cove</strong> is designed to help children 
                    transition smoothly into a formal learning environment. Our program focuses on building foundational skills
                     that are essential for academic success and social confidence.
                </p>
                <p>We work on<strong> early learning skills, attention and focus, communication, social interaction, and independence,</strong> 
                    using structured yet engaging activities. Children learn through play, guided practice, and collaborative 
                    exercises that prepare them for classroom routines and expectations.</p>
                    <p>Parents are involved throughout the process, receiving guidance to reinforce skills at home 
                        and ensure a confident start to school life.</p>
                        <p>At Kiddie Cove, we believe that early preparation lays the groundwork for a positive,
                             successful educational journey.</p>

                <h4 className="font-bold mt-6">
                    Who Can Benefit from the School Readiness Program?
                </h4>
                <ul className="list-disc ml-6">
                    <li>Children approaching preschool or kindergarten</li>
                    <li>Children needing focus or routine support</li>
                    <li>Children developing early academic skills</li>
                    <li>Children learning independence skills</li>
                    <li>Children adapting to structured environments</li>
                </ul>
            </>
        ),
    },

    /* ================= EARLY INTERVENTION ================= */
    {
        id: "early-intervention",
        title: "Early Intervention",
        icon: Baby,
        description: "Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

        images: [

            "https://res.cloudinary.com/dd4oiwnep/image/upload/unnamed_xmgzax.png",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/unnamed_1_enyj0g.png"
        ],
        content: (
            <>
                <blockquote className="italic border-l-4 border-orange-400 pl-4">
                    “The earlier we start, the better the foundation.” — Maria Montessori
                </blockquote>

                <p>
                   <strong> Early Intervention</strong>at <strong>Kiddie Cove</strong> focuses on providing timely, 
                   individualized support during the crucial early developmental years. 
                   Our goal is to strengthen a child’s <strong>communication, motor,cognitive, and 
                   social skills</strong>, laying a strong foundation for future learning and growth.
                </p>
                <p>We assess each child’s unique strengths and challenges to create<strong> personalized intervention plans. </strong>
                    Therapy sessions are engaging and goal-oriented, combining play, structured activities, 
                    and parent guidance to ensure meaningful progress. Early support not only addresses developmental
                     delays but also promotes confidence, independence, and social competence.</p>
                     <p>Parents are actively involved in the process, receiving strategies and guidance to reinforce 
                        skills at home, maximizing the child’s developmental outcomes.</p>

                <h4 className="font-bold mt-6">
                    Who Can Benefit from Early Intervention?
                </h4>
                <ul className="list-disc ml-6">
                    <li>Infants and toddlers with developmental delays</li>
                    <li>Children with speech or motor challenges</li>
                    <li>Children with social or emotional needs</li>
                    <li>Children at risk of learning difficulties</li>
                    <li>Families seeking early developmental support</li>
                </ul>
            </>
        ),
    },

    /* ================= GROUP THERAPY ================= */
    {
        id: "group-therapy",
        title: "Group Therapy",
        icon: Users,
        description: "Helping children develop clear articulation, communication, language skills, and confidence in expressing themselves.",

        images: [
            "https://res.cloudinary.com/dd4oiwnep/image/upload/unnamed_2_y2wdy7.png",
            "https://res.cloudinary.com/dd4oiwnep/image/upload/Screenshot_2025-12-22_065238_mlgkq9.png"
        ],
        content: (
            <>
                <blockquote className="italic border-l-4 border-orange-400 pl-4">
                    “Alone we can do so little; together we can do so much.” — Helen Keller
                </blockquote>

                <p>
                    <strong>Group Therapy</strong>at Kiddie Cove provides children with a structured 
                    and supportive environment to develop <strong>social skills, teamwork, and confidence.</strong>
                    Through guided peer interactions, children learn how to communicate, collaborate, 
                    and navigate social situations effectively.
                </p>
                <p>
                    Sessions focus on <strong>sharing, turn-taking, cooperation, empathy, and problem-solving,</strong>
                     using engaging group activities tailored to the needs of each child. Children 
                     also gain<strong>confidence and emotional regulation skills</strong> by interacting in a safe 
                     and encouraging setting. Parent involvement and feedback help extend these skills 
                     beyond the therapy sessions.
                </p>
                <p>At Kiddie Cove, Group Therapy not only promotes social competence 
                    but also fosters friendships, collaboration, and positive peer relationships.</p>

                <h4 className="font-bold mt-6">Who Can Benefit from Group Therapy?</h4>
                <ul className="list-disc ml-6">
                    <li>Children struggling with social interaction</li>
                    <li>Children needing communication support</li>
                    <li>Children learning cooperation and sharing</li>
                    <li>Children benefiting from peer modeling</li>
                    <li>Children building confidence in group settings</li>
                </ul>
            </>
        ),
    },
];
