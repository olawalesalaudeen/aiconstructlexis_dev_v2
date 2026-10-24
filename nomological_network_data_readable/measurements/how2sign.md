# How2Sign
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the definitions, the prevailing usage is as a large-scale American Sign Language dataset drawn from instructional videos and used as a benchmark for translation. Some descriptions make the domain more specific as "how to" instructional videos and as ASL-to-English translation, and another adds that it contains 35,191 samples with a vocabulary of 16K English words.

**What it is claimed to measure.** Papers link it to 2 behavioral indicators and no constructs. The dominant measured-by use is sign language translation, with papers reporting How2Sign as one of the datasets or benchmarks for that task; a smaller use is sign language identification, where results are reported with top-1 accuracy, while sentence-level translation in the same benchmark setup is scored with BLEURT-20.

**Space of uses.** Papers commonly mention How2Sign alongside other sign language datasets: the recurring companions are CSL-Daily, with some mentions of OpenASL, PHOENIX14T, and FLEURS-ASL. In these descriptions it is positioned as one of the benchmarks on which models report results in sign language translation experiments or broader benchmark suites, and no measurement instrument is formally linked to it in the recorded relationships.

## Sources

**[Uni-Sign: Toward Unified Sign Language Understanding at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/260a14acce2a89dad36adc8eefe7c59e-Paper-Conference.pdf)**
> A large-scale American Sign Language (ASL) dataset collected from instructional videos, used as a benchmark for evaluating sign language translation.

## Relationships

### → How2Sign
- **Sign language translation** (behaviors tasks) — *measured_by*
  > We provide sentence-level translation (scored with BLEURT [29]) (speciﬁcally, BLEURT-20 [24]) and sign language identiﬁcation (scored with top-1 accuracy) results on benchmarks for 4 sign languages: American Sign Language (ase, FLEURS-ASL [34] & How2Sign [4])... (Section 3.3)
  - [YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbbb65dc108e8ac2f82cba25bc5992fc-Paper-Conference.pdf)
- **Sign language identification** (behaviors tasks) — *measured_by*
  > We provide sentence-level translation... and sign language identiﬁcation... results on benchmarks for 4 sign languages: American Sign Language (ase, FLEURS-ASL [34] & How2Sign [4])... (Section 3.3)
  - [YouTube-SL-25: A Large-Scale, Open-Domain Multilingual Sign Language Parallel Corpus](https://proceedings.iclr.cc/paper_files/paper/2025/file/cbbb65dc108e8ac2f82cba25bc5992fc-Paper-Conference.pdf)
