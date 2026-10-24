# Sign language translation
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Sign-to-text translation, Sentence-level translation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats this behavior as generating written or textual output in a spoken language from a sign language video sequence, often under the labels sign language translation or sign-to-text translation. Definitions usually say the output should correspond to the meaning of the signs, and some add that it should be fluent or preserve meaning, grammar, and lexical content. Many papers also study a sentence-level form, including isolated sentence-length clips and translation done one sentence at a time, sometimes without broader document context.

**Variants.** Paper labels include sign language translation, sign-to-text translation, and sentence-level translation. The most visible variants are sentence-level settings, such as sentence-level ASL to English translation, zero-shot sentence-level translation on FLEURS-ASL, and translation of isolated sentence-length clips; one benchmark also mentions discourse-level translation. Another recurring setting translates each sign language into its region's spoken language, and one paper relates the sentence-level framing to machine translation through sentence- versus paragraph-level evaluation.

**Space of elicitation and scores.** Papers link sign language translation to two measurement instruments, FLEURS-ASL and How2Sign. Both are used as datasets or benchmarks for evaluation: FLEURS-ASL is described as supporting primarily sentence- and discourse-level translation, and one evaluation reports sentence-level translation on FLEURS-ASL and How2Sign scored with BLEURT.

**What it is taken as evidence of.** Papers link this behavior to three constructs, and the framing is mixed rather than uniform. One paper relates it to sign language understanding by treating SLT as a sub-task within SLU, another relates it to contextual understanding by saying these tasks demand fine-grained comprehension and context awareness, and a separate paper claims a causal relationship from cross-lingual generalization to sign language translation, reporting multilingual transfer benefits in sentence-level translation.

## Sources

**[Uni-Sign: Toward Unified Sign Language Understanding at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/260a14acce2a89dad36adc8eefe7c59e-Paper-Conference.pdf)**
> The task of generating a fluent textual translation in a spoken language from a given sign language video sequence.

**[YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbbb65dc108e8ac2f82cba25bc5992fc-Paper-Conference.pdf) (as "Sign-to-text translation")**
> The task of generating written text that corresponds to the meaning of a sequence of signs in a video.

**[BOUQuET : dataset, Benchmark and Open initiative for Universal Quality Evaluation in Translation](https://aclanthology.org/2025.emnlp-main.1400.pdf) (as "Sentence-level translation")**
> Translating text one sentence at a time, often without access to the broader document context.

## Relationships

### Sign language translation →
- **FLEURS-ASL** (measurements) — *measured_by*
  > We provide sentence-level translation (scored with BLEURT [29]) (speciﬁcally, BLEURT-20 [24]) and sign language identiﬁcation (scored with top-1 accuracy) results on benchmarks for 4 sign languages: American Sign Language (ase, FLEURS-ASL [34] & How2Sign [4])... (Section 3.3)
  - [YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbbb65dc108e8ac2f82cba25bc5992fc-Paper-Conference.pdf)
- **How2Sign** (measurements) — *measured_by*
  > We provide sentence-level translation (scored with BLEURT [29]) (speciﬁcally, BLEURT-20 [24]) and sign language identiﬁcation (scored with top-1 accuracy) results on benchmarks for 4 sign languages: American Sign Language (ase, FLEURS-ASL [34] & How2Sign [4])... (Section 3.3)
  - [YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbbb65dc108e8ac2f82cba25bc5992fc-Paper-Conference.pdf)

### → Sign language translation
- **Cross-lingual generalization** (constructs) — *causes*
  > experiments in sentence-level translation and sign language identiﬁcation which demonstrate multilingual transfer beneﬁts both higher- and lower-resource sign languages. (Section 5)
  - [YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbbb65dc108e8ac2f82cba25bc5992fc-Paper-Conference.pdf)

### Associated with
- **Sign language understanding** (constructs)
  > SLU can be subdivided into several sub-tasks, including isolated sign language recognition (ISLR), continuous sign language recognition (CSLR), and sign language translation (SLT). (Section 1)
  - [Uni-Sign: Toward Unified Sign Language Understanding at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/260a14acce2a89dad36adc8eefe7c59e-Paper-Conference.pdf)
- **Contextual understanding** (constructs)
  > All these tasks [ISLR, CSLR, and SLT] impose indispensable demands on the model’s fine-grained comprehension and context awareness capabilities. (Section 1)
  - [Uni-Sign: Toward Unified Sign Language Understanding at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/260a14acce2a89dad36adc8eefe7c59e-Paper-Conference.pdf)
