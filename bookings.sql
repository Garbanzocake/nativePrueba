PGDMP  (    +            
    {            bookings    16.0    16.0 $    0           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            1           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            2           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            3           1262    16398    bookings    DATABASE     j   CREATE DATABASE bookings WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE bookings;
                postgres    false            �            1259    16495    booking    TABLE     �   CREATE TABLE public.booking (
    id integer NOT NULL,
    booking_date timestamp without time zone NOT NULL,
    passengers_number integer NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "userId" integer
);
    DROP TABLE public.booking;
       public         heap    postgres    false            �            1259    16488    booking_flight    TABLE     z   CREATE TABLE public.booking_flight (
    id integer NOT NULL,
    "flightId" integer NOT NULL,
    "bookingId" integer
);
 "   DROP TABLE public.booking_flight;
       public         heap    postgres    false            �            1259    16487    booking_flight_id_seq    SEQUENCE     �   CREATE SEQUENCE public.booking_flight_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.booking_flight_id_seq;
       public          postgres    false    220            4           0    0    booking_flight_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.booking_flight_id_seq OWNED BY public.booking_flight.id;
          public          postgres    false    219            �            1259    16494    booking_id_seq    SEQUENCE     �   CREATE SEQUENCE public.booking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.booking_id_seq;
       public          postgres    false    222            5           0    0    booking_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.booking_id_seq OWNED BY public.booking.id;
          public          postgres    false    221            �            1259    16426    flight    TABLE     �  CREATE TABLE public.flight (
    id integer NOT NULL,
    airline character varying NOT NULL,
    flight_number character varying NOT NULL,
    origin character varying NOT NULL,
    destination character varying NOT NULL,
    arrival_date timestamp without time zone NOT NULL,
    departure_date timestamp without time zone NOT NULL,
    available_seats integer DEFAULT 100 NOT NULL,
    passenger_seats integer DEFAULT 200 NOT NULL
);
    DROP TABLE public.flight;
       public         heap    postgres    false            �            1259    16425    flight_id_seq    SEQUENCE     �   CREATE SEQUENCE public.flight_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.flight_id_seq;
       public          postgres    false    218            6           0    0    flight_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.flight_id_seq OWNED BY public.flight.id;
          public          postgres    false    217            �            1259    16414    users    TABLE       CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16413    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    216            7           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    215            �           2604    16498 
   booking id    DEFAULT     h   ALTER TABLE ONLY public.booking ALTER COLUMN id SET DEFAULT nextval('public.booking_id_seq'::regclass);
 9   ALTER TABLE public.booking ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            �           2604    16491    booking_flight id    DEFAULT     v   ALTER TABLE ONLY public.booking_flight ALTER COLUMN id SET DEFAULT nextval('public.booking_flight_id_seq'::regclass);
 @   ALTER TABLE public.booking_flight ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            �           2604    16429 	   flight id    DEFAULT     f   ALTER TABLE ONLY public.flight ALTER COLUMN id SET DEFAULT nextval('public.flight_id_seq'::regclass);
 8   ALTER TABLE public.flight ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    16417    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            -          0    16495    booking 
   TABLE DATA           \   COPY public.booking (id, booking_date, passengers_number, "isActive", "userId") FROM stdin;
    public          postgres    false    222   0*       +          0    16488    booking_flight 
   TABLE DATA           E   COPY public.booking_flight (id, "flightId", "bookingId") FROM stdin;
    public          postgres    false    220   M*       )          0    16426    flight 
   TABLE DATA           �   COPY public.flight (id, airline, flight_number, origin, destination, arrival_date, departure_date, available_seats, passenger_seats) FROM stdin;
    public          postgres    false    218   j*       '          0    16414    users 
   TABLE DATA           Y   COPY public.users (id, email, password, "firstName", "lastName", "isActive") FROM stdin;
    public          postgres    false    216   ,       8           0    0    booking_flight_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.booking_flight_id_seq', 6, true);
          public          postgres    false    219            9           0    0    booking_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.booking_id_seq', 3, true);
          public          postgres    false    221            :           0    0    flight_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.flight_id_seq', 10, true);
          public          postgres    false    217            ;           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 4, true);
          public          postgres    false    215            �           2606    16493 -   booking_flight PK_14bfd26e52688e6165903dda0a6 
   CONSTRAINT     m   ALTER TABLE ONLY public.booking_flight
    ADD CONSTRAINT "PK_14bfd26e52688e6165903dda0a6" PRIMARY KEY (id);
 Y   ALTER TABLE ONLY public.booking_flight DROP CONSTRAINT "PK_14bfd26e52688e6165903dda0a6";
       public            postgres    false    220            �           2606    16501 &   booking PK_49171efc69702ed84c812f33540 
   CONSTRAINT     f   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.booking DROP CONSTRAINT "PK_49171efc69702ed84c812f33540";
       public            postgres    false    222            �           2606    16422 $   users PK_a3ffb1c0c8416b9fc6f907b7433 
   CONSTRAINT     d   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433";
       public            postgres    false    216            �           2606    16435 %   flight PK_bf571ce6731cf071fc51b94df03 
   CONSTRAINT     e   ALTER TABLE ONLY public.flight
    ADD CONSTRAINT "PK_bf571ce6731cf071fc51b94df03" PRIMARY KEY (id);
 Q   ALTER TABLE ONLY public.flight DROP CONSTRAINT "PK_bf571ce6731cf071fc51b94df03";
       public            postgres    false    218            �           2606    16424 $   users UQ_97672ac88f789774dd47f7c8be3 
   CONSTRAINT     b   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE (email);
 P   ALTER TABLE ONLY public.users DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3";
       public            postgres    false    216            �           2606    16507 &   booking FK_336b3f4a235460dc93645fbf222    FK CONSTRAINT     �   ALTER TABLE ONLY public.booking
    ADD CONSTRAINT "FK_336b3f4a235460dc93645fbf222" FOREIGN KEY ("userId") REFERENCES public.users(id);
 R   ALTER TABLE ONLY public.booking DROP CONSTRAINT "FK_336b3f4a235460dc93645fbf222";
       public          postgres    false    3467    216    222            �           2606    16502 -   booking_flight FK_4a79b70edef5fb95b4c19e13339    FK CONSTRAINT     �   ALTER TABLE ONLY public.booking_flight
    ADD CONSTRAINT "FK_4a79b70edef5fb95b4c19e13339" FOREIGN KEY ("bookingId") REFERENCES public.booking(id);
 Y   ALTER TABLE ONLY public.booking_flight DROP CONSTRAINT "FK_4a79b70edef5fb95b4c19e13339";
       public          postgres    false    220    3475    222            �           2606    16517 -   booking_flight FK_f35dccff17d2c52f18182d0d4d3    FK CONSTRAINT     �   ALTER TABLE ONLY public.booking_flight
    ADD CONSTRAINT "FK_f35dccff17d2c52f18182d0d4d3" FOREIGN KEY ("flightId") REFERENCES public.flight(id);
 Y   ALTER TABLE ONLY public.booking_flight DROP CONSTRAINT "FK_f35dccff17d2c52f18182d0d4d3";
       public          postgres    false    3471    218    220            -      x������ � �      +      x������ � �      )   �  x�m�Mn�0����@�Q���V�H����ab"&"��D���K��i)�z�>�oFb��*z�Q#AH�C�;��ƎL�7���2���#Z"��m��9�"�ȠU���f�����'�z��f��1�s�gx��hsx2کmz�'��_��Z�u8�lɧ*g؜3¨��ك������1?���{y�D�(_R1q��N̈�[��r����z��V�U��P���S�`X�3�Q-A��������)�\�Q2��%�� 1k�Z�j�N��뻮D�����Z�6�JT��M�J}S�����[	b]c?�`���K�W{�TP�5�UP�Z(�h��8_����N[�N�_چe���as�Y����z���{����E��'d�������Q|��X,���п      '   �   x�eͻ�0 @ѹ|3��6�XQ�@�	B\�T��V����L\�x��~�]dT��PW� -��w�U�,��ě��"2L�6q���%,�5��xl���O�c/0(�wo�r����@�-N�S)�U�i��2�ZR]?
���X����>�эc<9�p�Ey�Z?�     