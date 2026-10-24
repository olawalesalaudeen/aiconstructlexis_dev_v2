# Enwik8
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** enwik8, EnWik-8  

## State of the Field

**What it is.** Most commonly, papers treat Enwik8 as a Wikipedia language modeling benchmark built from 100 million bytes of unprocessed English-language text. Definitions usually frame it as byte-level and as a dataset for compression and sequence prediction, with one paper noting long-term dependencies that can span tens of thousands of bytes and another describing it as a standard English Wikipedia dataset for training and evaluating compression models. A smaller line describes EnWik-8 as a character-level language modeling benchmark for evaluating pretraining performance, so the prevailing framing is byte-level but not uniform. One paper also contrasts it with enwik9, described there as an extension, while enwik8 contains the first 100 million bytes.

**What it is claimed to measure.** The papers do not explicitly report Enwik8 as measuring any named construct or behavioral indicator. Instead, they use it as an evaluation setting and report outputs such as test bits-per-byte and, in the character-level framing, test bytes-per-character.

**Space of uses.** Across the papers, Enwik8 is used for both training and evaluation: one paper states that it trains vanilla Transformer models on enwik8, and another reports test bits-per-byte on it. Papers position it either as a benchmark for compression or language modeling, or as part of a pretraining comparison where character-level EnWik-8 appears alongside Wikitext-103.

## Sources

**[Transformer-VQ: Linear-Time Transformers via Vector Quantization](https://proceedings.iclr.cc/paper_files/paper/2024/file/18eb80b9faaed5d003b31574bd2a3e9d-Paper-Conference.pdf)**
> Byte-level language modeling benchmark using 100 million bytes of raw Wikipedia text, assessing the model's ability to compress and predict long sequences with distant dependencies.

**[Language Modeling Is Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/3cbf627fa24fb6cb576e04e689b9428b-Paper-Conference.pdf) (as "enwik8")**
> A standard English Wikipedia byte-level dataset used for training and evaluating compression models.

**[Tight Clusters Make Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/854a9ab0f323b841955e70ca383b27d1-Paper-Conference.pdf) (as "EnWik-8")**
> A character-level language modeling benchmark used to evaluate pretraining performance.
